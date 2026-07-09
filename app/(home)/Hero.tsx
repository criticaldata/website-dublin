import Link from 'next/link';
import RenderParticles from '@/components/primitives/particles';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
	{
		id: 'research',
		name: 'Research',
		description:
			'We strongly believe in AI health equity. We lead the research community in how to achieve this goal.',
	},
	{
		id: 'events',
		name: 'Events',
		description:
			'We believe in developing data communities and local AI capacity. We host datathons globally to achieve this.',
	},
	{
		id: 'resources',
		name: 'Resources',
		description:
			'We develop and share open source health data, software, and resources to foster healthcare innovation.',
	},
];

export default function Hero() {
	return (
		<div className="bg-black min-h-screen inset-x-0 bg-cover bg-center z-10 shadow-xl sm:overflow-hidden">
			<div className="absolute inset-0">
				<RenderParticles />
			</div>
			<div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-16 pb-24 sm:py-28 lg:py-32 lg:px-8">
				<h1 className="max-w-5xl px-4 text-center text-3xl text-white font-bold tracking-tight sm:text-5xl lg:text-6xl">
					An ecosystem that improves healthcare with data science and community
					bridging
				</h1>
				<p className="mx-auto my-6 text-white max-w-lg text-center text-lg sm:text-2xl font-semibold sm:max-w-3xl">
					MIT Critical Data develops local AI capacity in healthcare by building
					open data & software, fostering community engagement through
					datathons, and advocating for AI equity in research.
				</p>
				<ul
					role="list"
					className="mt-3 flex justify-center flex-wrap gap-x-6 gap-y-6"
				>
					{sections.map((section) => (
						<li
							key={section.name}
							className={cn(
								'bg-red-900',
								'w-[280px] col-span-1 p-6 pb-8 rounded-3xl shadow-sm'
							)}
						>
							<div className="text-center mb-2 text-2xl font-semibold text-white">
								{section.name}
							</div>
							<p className="text-white/80 mb-4">{section.description}</p>
							<div
								className={cn(
									'flex items-center justify-between gap-x-2',
									section.id === 'resources' && 'justify-center'
								)}
							>
								<Link
									href={`#${section.id}`}
									className="uppercase text-xs tracking-widest flex items-center gap-x-1 text-white"
								>
									<ArrowDownIcon className="h-4 w-4" />
									Learn More
								</Link>
								{section.id !== 'resources' && (
									<Link href={`/${section.id}`}>
										<Button className="rounded-full bg-white text-black">
											<ArrowRightIcon className="h-4 w-4" />
											Browse
										</Button>
									</Link>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
