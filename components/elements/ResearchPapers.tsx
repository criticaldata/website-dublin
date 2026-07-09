'use client';

import { useEffect, useRef, useState } from 'react';
import ResearchPaperCard from './ResearchPaperCard';
import { getResearchPapers } from '@/actions/research';
import { ResearchPaper } from '@/types/app.types';
import Spinner from '@/components/primitives/spinner';
import { PlusIcon } from 'lucide-react';

interface ResearchState {
	papers: ResearchPaper[];
	totalCount: number;
	page: number;
	pageSize: number;
	isLoading: boolean;
	error: string | null;
}

function dedupePapers(papers: ResearchPaper[]): ResearchPaper[] {
	const map = new Map<string, ResearchPaper>();
	for (const paper of papers) {
		map.set(paper.id, paper);
	}
	return Array.from(map.values());
}

export default function ResearchPapers() {
	const [state, setState] = useState<ResearchState>({
		papers: [],
		totalCount: 0,
		page: 1,
		pageSize: 20,
		isLoading: true,
		error: null,
	});

	const [loadedPages, setLoadedPages] = useState<Set<number>>(new Set([1]));
	const bottomRef = useRef<HTMLDivElement>(null);
	const totalPages = Math.ceil(state.totalCount / state.pageSize);

	useEffect(() => {
		loadPapers(state.page, state.pageSize);
	}, [state.page, state.pageSize]);

	useEffect(() => {
		if (!bottomRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !state.isLoading) {
						const nextPage = state.page + 1;
						if (nextPage <= totalPages && !loadedPages.has(nextPage)) {
							setLoadedPages((prev) => {
								const newSet = new Set(prev);
								newSet.add(nextPage);
								return newSet;
							});
							setState((prevState) => ({
								...prevState,
								page: nextPage,
								isLoading: true,
							}));
						}
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1.0,
			}
		);

		observer.observe(bottomRef.current);

		return () => {
			observer.disconnect();
		};
	}, [
		bottomRef,
		state.isLoading,
		state.page,
		state.totalCount,
		state.pageSize,
		loadedPages,
		totalPages,
	]);

	const loadPapers = async (pageNumber: number, pageSize: number) => {
		try {
			const { papers, totalCount } = await getResearchPapers(
				pageNumber,
				pageSize
			);
			setState((prevState) => ({
				...prevState,
				papers: dedupePapers([...prevState.papers, ...papers]),
				totalCount,
				isLoading: false,
			}));
		} catch (error) {
			console.error(error);
			setState((prevState) => ({
				...prevState,
				error: 'Failed to load papers',
				isLoading: false,
			}));
		}
	};

	if (state.isLoading && state.page === 1) {
		return <Spinner />;
	}

	return (
		<>
			<div className="mb-8 text-base text-slate-400 italic">
				Showing {state.papers.length} of {state.totalCount} papers
			</div>
			<ul role="list" className="columns-1 gap-6 sm:columns-2 xl:columns-3">
				{state.papers.map((paper) => (
					<ResearchPaperCard key={paper.id} paper={paper} />
				))}
			</ul>
			{state.isLoading && state.page > 1 && (
				<div className="my-8 flex justify-center">
					<Spinner />
				</div>
			)}
			{!state.isLoading && state.page >= totalPages && (
				<div className="text-center my-8 text-gray-500">
					No more papers to load.
				</div>
			)}
			<div ref={bottomRef} />
		</>
	);
}
