import { Suspense } from 'react';
import ResearchPapers from '@/components/elements/ResearchPapers';
import Spinner from '@/components/primitives/spinner';

export default function ResearchPage() {
	return (
		<div className="container py-20">
			<h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
				Research Papers
			</h1>
			<p className="max-w-xl text-lg sm:text-xl leading-8 mt-6 text-slate-400">
				Browse our research papers and stay up to date with the latest research
				in Health AI.
			</p>
			<div className="mt-8">
				<Suspense fallback={<Spinner />}>
					<ResearchPapers />
				</Suspense>
			</div>
		</div>
	);
}
