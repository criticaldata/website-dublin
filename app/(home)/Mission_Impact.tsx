'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

const stats = [
	{
		label: 'Datasets',
		value: '260+',
		description:
			'Open health datasets have been shared through our PhysioNet platform.',
		extra: (
			<div className="text-base bg-white/70 rounded-2xl border border-slate-300 px-4 py-2 mt-4 text-slate-500">
				This has led to more than{' '}
				<span className="text-lg text-black font-bold">
					2000 new publications
				</span>{' '}
				in the last 4 years.
			</div>
		),
	},
	{
		label: 'MIMIC Footprint',
		value: '10k+ citations',
		description:
			'The MIMIC dataset has been cited more than 10,000 times in scientific publications.',
		extra: (
			<div className="text-base bg-white/70 rounded-2xl border border-slate-300 px-4 py-2 mt-4 text-slate-500">
				<Image
					className="rounded-2xl mt-6"
					width={1080}
					height={600}
					src="/home/mimic.jpeg"
					alt="MIMIC"
				/>
			</div>
		),
	},
	{
		label: 'AI Capacity Building',
		value: '100+ events',
		description:
			'We have trained 5000+ people in data science and AI through our events and workshops.',
		extra: (
			<div className="text-base bg-white/70 rounded-2xl border border-slate-300 px-4 py-2 mt-4 text-slate-500">
				Hosted in{' '}
				<span className="text-lg text-black font-bold">39 countries</span>,
				training a generation of AI-ready clinicians, researchers, and
				engineers.
			</div>
		),
	},
	{
		label: 'Community',
		value: '80k+ people',
		description:
			'People have used our datasets, leading to a phenomenal scientific footprint.',
		extra: (
			<div className="text-base bg-white/70 rounded-2xl border border-slate-300 px-4 py-2 mt-4 text-slate-500">
				The MIMIC dataset alone has been cited more than{' '}
				<span className="text-lg text-black font-bold">10,000 times</span> in
				scientific publications.
			</div>
		),
	},
];

export default function Mission_Impact() {
	return (
		<>
			<h2 className="text-4xl sm:text-6xl mb-6 font-bold tracking-tight text-gray-900">
				Our Impact
			</h2>
			<div className="flex items-center gap-4">
				<div className="text-2xl max-w-3xl leading-7 font-medium tracking-tight text-slate-500">
					A key part of our mission is to build global capacity in Health AI and
					data science.
				</div>
			</div>
			<div className="columns-1 md:columns-2 gap-4 mt-8">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className={cn(
							'bg-slate-200 p-8 rounded-2xl border border-slate-300 shadow-lg mb-4'
							// stat.label === 'Community' && 'col-span-2'
						)}
					>
						<div className="text-black font-bold uppercase text-sm mb-4 tracking-widest flex items-center gap-4">
							{stat.label}
						</div>
						<div className="text-4xl mb-4 sm:text-5xl font-bold tracking-tight text-gray-900">
							{stat.value}
						</div>
						<div className="text-xl leading-7 font-medium tracking-tight text-slate-500">
							{stat.description}
						</div>
						{stat.extra}
					</div>
				))}
			</div>
		</>
	);
}
