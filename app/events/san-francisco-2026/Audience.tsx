const audiences = [
	{ label: 'Founders', connector: 'building', detail: 'startups with purpose' },
	{
		label: 'Investors',
		connector: 'reimagining',
		detail: 'how capital flows',
	},
	{
		label: 'Researchers',
		connector: 'in',
		detail: 'AI, health, and data science',
	},
	{
		label: 'Clinicians',
		connector: 'shaping',
		detail: 'care at the front lines',
	},
	{
		label: 'Students',
		connector: 'from',
		detail: 'every kind of campus',
	},
	{
		label: 'Community leaders',
		connector: 'with',
		detail: 'perspectives that shape better futures',
	},
	{
		label: 'Changemakers',
		connector: 'who',
		detail: 'believe great tech should outlast the hype cycle',
	},
];

export default function Audience() {
	return (
		<section className="relative bg-black/60 py-24 sm:py-32 overflow-hidden">
			{/* Subtle amber glow */}
			<div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Who Should Attend
					</span>
				</div>

				{/* Editorial headline */}
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-12">
					This gathering is for{' '}
					<span className="italic text-white/50">every voice</span> that
					deserves to shape the future.
				</h2>

				{/* Flowing editorial list — compact, prose-like */}
				<ul className="space-y-3 sm:space-y-4 max-w-3xl">
					{audiences.map((audience) => (
						<li
							key={audience.label}
							className="group text-xl sm:text-2xl lg:text-[1.75rem] leading-snug tracking-tight text-white/45 transition-colors duration-300 hover:text-white/80"
						>
							<span className="font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
								{audience.label}
							</span>{' '}
							<span className="italic text-white/35">{audience.connector}</span>{' '}
							{audience.detail}.
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
