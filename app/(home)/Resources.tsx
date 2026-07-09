import { Button } from '@/components/ui/button';
import { ChevronRightIcon, SquareCode, Database, Book } from 'lucide-react';
import Link from 'next/link';

const options = [
	{
		name: 'Datasets',
		description:
			'Our team created and maintains the MIMIC and eICU-CRD databases - all freely available. MIMIC is one of the largest and most widely cited ICU datasets available.',
		icon: Database,
		linkName: 'Explore MIMIC',
		link: 'https://mimic.mit.edu/',
	},
	{
		name: 'Software',
		description:
			'Our team created and maintains the PhysioNet platform. The PhysioNet platform contains hundreds of health datasets and open source software that users can use.',
		icon: SquareCode,
		linkName: 'Explore PhysioNet',
		link: 'https://physionet.org/',
	},
	// {
	// 	name: 'Content',
	// 	description:
	// 		'We share tutorials, coding notebooks, and other content to help you get started with health AI.',
	// 	icon: Book,
	// 	linkName: 'Explore Content',
	// 	link: '/resources',
	// },
];

export default function Resources() {
	return (
		<div id="resources" className="bg-black mt-40">
			<div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16 xl:px-24 py-24 lg:pt-40 lg:pb-52 items-center">
				<div>
					<h1 className="mb-4 font-bold flex items-center gap-x-4">
						<div className="bg-red-800 text-white p-4 text-xl font-bold rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center flex-shrink-0">
							3
						</div>
						<div className="uppercase text-sm sm:text-xl tracking-wide text-red-300">
							Resources
						</div>
					</h1>
					<h2 className="tracking-tighter text-3xl lg:text-5xl text-white font-semibold mt-6 lg:mx-auto">
						We share open health datasets, develop open source software tools,
						and share learning material to foster innovation in healthcare.
					</h2>
				</div>
				<div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-12">
					{options.map((option) => {
						return (
							<div
								key={option.name}
								className="flex flex-col justify-between rounded-xl bg-indigo-400/5 p-6 ring-1 ring-inset ring-white/10"
							>
								<div className="space-y-3">
									<div className="flex items-center gap-x-2">
										<div className="flex h-10 w-10 bg-red-800 items-center justify-center rounded-full">
											<option.icon
												className="-ml-0.5 h-4 w-4 text-white"
												aria-hidden="true"
											/>
										</div>
										<p className="font-semibold text-white text-2xl">
											{option.name}
										</p>
									</div>
									<p className="text-lg text-slate-400">{option.description}</p>
								</div>
								<Link
									href={option.link}
									rel="noopener noreferrer"
									target="_blank"
								>
									<Button className="h-12 w-full rounded-full mt-5 text-lg px-6 bg-red-800 hover:bg-red-700 text-white">
										<ChevronRightIcon
											className="-ml-0.5 h-6 w-6"
											aria-hidden="true"
										/>
										{option.linkName}
									</Button>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
