import { LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TruncateText from '@/components/primitives/truncate-text';
import Link from 'next/link';
import { ResearchPaper } from '@/types/app.types';

export default function ResearchPaperCard({ paper }: { paper: ResearchPaper }) {
	return (
		<li
			key={paper.id}
			className="overflow-hidden mb-6 break-inside-avoid shadow-lg rounded-2xl"
		>
			<div className="bg-white p-6">
				<div className="flex items-center divide-x divide-gray-400 flex-wrap text-xs mb-1 text-gray-500">
					{paper.date_published && (
						<span className="pr-2">{paper.date_published}</span>
					)}
					{paper.publisher && (
						<span className={paper.date_published ? 'pl-2' : ''}>
							{paper.publisher}
						</span>
					)}
				</div>
				<div className="text-lg font-medium leading-6 text-gray-900">
					{paper.title}
				</div>
				{paper.authors && (
					<div className="text-sm mt-1 text-gray-500">
						<TruncateText
							text={paper.authors}
							length={80}
							expandText="+ More"
						/>
					</div>
				)}
			</div>
			<div className="p-4 sm:p-6 bg-pink-50 text-sm leading-6 ring-1 ring-inset ring-white/10">
				{paper.abstract ? (
					<TruncateText
						text={paper.abstract}
						color="text-gray-600"
						expandTextColor="text-red-600"
					/>
				) : (
					<div className="text-gray-500">No abstract available.</div>
				)}
				{paper.link && (
					<Link href={paper.link} target="_blank" rel="noopener noreferrer">
						<Button variant="outline" className="rounded-full mt-4">
							<LinkIcon className="h-5 w-5 flex-shrink-0" />
							<span>View Paper</span>
						</Button>
					</Link>
				)}
			</div>
		</li>
	);
}
