'use server';

import { createClient } from '@/lib/supabase/server';
import { ResearchPaper } from '@/types/app.types';

export const getResearchPapers = async (
	page: number = 1,
	pageSize: number = 10
): Promise<{ papers: ResearchPaper[]; totalCount: number }> => {
	const supabase = await createClient();

	// Determine the number of records to get from the database
	// Page 1: From 0 to 19 (20 records)
	// Page 2: From 20 to 39 (20 records)
	// Page 3: From 40 to 59 (20 records)
	// etc.
	const from = (page - 1) * pageSize;
	const to = from + pageSize - 1;

	try {
		const { data, error, count } = await supabase
			.from('publications')
			.select('*', { count: 'exact' })
			.order('date_published', { ascending: false })
			.range(from, to);

		if (error) {
			throw new Error(error.message);
		}
		return {
			papers: data as ResearchPaper[],
			totalCount: count ?? 0,
		};
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch research papers');
	}
};
