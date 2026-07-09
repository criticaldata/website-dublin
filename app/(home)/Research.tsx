import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import ResearchPapers from '@/components/elements/ResearchPapers';
import Spinner from '@/components/primitives/spinner';
import papers from '@/data/papers.json';
import ResearchPaperCard from '@/components/elements/ResearchPaperCard';

export default function Research() {
	return (
		<div id="research" className="bg-black transform -skew-y-6 mt-40">
			<div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16 xl:px-24 py-24 lg:pt-40 lg:pb-52 items-center transform skew-y-6">
				<div className="mx-auto flex flex-col gap-y-4 items-center justify-center text-center max-w-3xl">
					<div className="bg-red-800 flex-shrink-0 text-white p-4 text-xl font-semibold rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center">
						1
					</div>
					<div className="uppercase text-sm sm:text-xl font-semibold tracking-wide text-red-300">
						Our Research
					</div>
					<h2 className="tracking-tighter text-3xl lg:text-5xl mb-4 font-bold text-white">
						We produce research to advance AI equity {'&'} the democratization
						of Health AI.
					</h2>
					<div className="flex items-center gap-x-4 justify-center">
						<Link href="/research">
							<Button className="rounded-full text-lg h-12 px-6 bg-red-800 hover:bg-red-700 text-white">
								<ArrowRightIcon className="h-5 w-5 flex-shrink-0" />
								<span>Browse Research</span>
							</Button>
						</Link>
					</div>
				</div>
				<div className="max-w-7xl mx-auto mt-12">
					<ul role="list" className="columns-1 gap-6 sm:columns-2 xl:columns-3">
						{papers
							.filter((paper) => paper.highlight)
							.map((paper) => (
								<ResearchPaperCard key={paper.id} paper={paper} />
							))}
					</ul>
				</div>
			</div>
		</div>
	);
}
