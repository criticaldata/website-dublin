'use server';

import { createClient } from '@/lib/supabase/server';
import { Highlight } from '@/types/app.types';
import { HighlightFormData } from '@/actions/schemas';

// DB type might still differ, so we handle mapping here
interface DBHighlight {
	id: string;
	title: string;
	description: string;
	link: string;
	category: string;
	created_at: string;
	featured?: boolean;
}

export const getHighlights = async (): Promise<Highlight[]> => {
	const supabase = await createClient();
	try {
		const { data, error } = await supabase
			.from('highlights')
			.select('*')
			.order('created_at', { ascending: false });

		if (error) {
			throw new Error(error.message);
		}
		
		// Map DB structure to App structure
		return (data as DBHighlight[]).map(item => ({
			...item,
			// Split comma-separated categories and trim whitespace
			categories: item.category 
				? item.category.split(',').map(c => c.trim()).filter(c => c.length > 0) 
				: [],
			featured: item.featured || false,
			type: 'link', // Default type
		}));
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch highlights');
	}
};

export const addHighlight = async (highlight: HighlightFormData) => {
	const supabase = await createClient();

	try {
		// Flatten array back to string for DB if needed, or update this logic if schema changes
		// For now, assuming schema is still single string 'category'
		// We'll just take the first category or join them
		const dbPayload = {
			...highlight,
			category: highlight.category // Assuming schema still expects string
		};

		const { data, error } = await supabase
			.from('highlights')
			.insert(dbPayload)
			.select()
			.single();

		if (error) {
			throw new Error(error.message);
		}
		return {
			success: true,
			message: 'Highlight added successfully',
			data,
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to add highlight',
			errors: {
				root: 'Failed to add highlight',
			},
		};
	}
};

export const updateHighlight = async (
	id: string,
	highlight: HighlightFormData
) => {
	const supabase = await createClient();

	try {
		const dbPayload = {
			...highlight,
			category: highlight.category
		};

		const { data, error } = await supabase
			.from('highlights')
			.update(dbPayload)
			.eq('id', id)
			.select()
			.single();

		if (error) {
			throw new Error(error.message);
		}
		return {
			success: true,
			message: 'Highlight updated successfully',
			data,
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to update highlight',
			errors: {
				root: 'Failed to update highlight',
			},
		};
	}
};

export const deleteHighlight = async (id: string) => {
	const supabase = await createClient();

	try {
		const { error } = await supabase.from('highlights').delete().eq('id', id);

		if (error) {
			throw new Error(error.message);
		}
		return {
			success: true,
			message: 'Highlight deleted successfully',
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to delete highlight',
		};
	}
};

export const toggleFeaturedHighlight = async (id: string, featured: boolean) => {
	const supabase = await createClient();

	try {
		if (featured) {
			// Unset all featured highlights first
			const { error: resetError } = await supabase
				.from('highlights')
				.update({ featured: false })
				.eq('featured', true);
			
			if (resetError) throw new Error(resetError.message);
		}

		// Set the specific highlight
		const { error } = await supabase
			.from('highlights')
			.update({ featured })
			.eq('id', id);

		if (error) throw new Error(error.message);

		return {
			success: true,
			message: 'Highlight featured status updated',
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'Failed to update highlight featured status',
		};
	}
};
