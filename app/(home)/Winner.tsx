// The top three at DubLINK on 19 September 2026, laid out as a podium.
// `order` puts first in the middle on wide screens, `step` sets how tall
// each place stands and `size` how large its numeral is; phones keep the
// list order.
const podium = [
	{
		place: 'First',
		numeral: '1',
		team: 'Team 10',
		medal: 'gold' as const,
		order: 'sm:order-2',
		step: 'sm:h-44',
		size: 'sm:text-7xl',
		members: [
			'Narod Daldal',
			'Sheila Zaragoza',
			"Jean O'Sullivan",
			'Apoorv Purohit',
			'Gabor Zilahi',
			'Rabiat Muhammed',
		],
	},
	{
		place: 'Second',
		numeral: '2',
		team: 'Team 9',
		medal: 'silver' as const,
		order: 'sm:order-1',
		step: 'sm:h-32',
		size: 'sm:text-6xl',
		members: [
			"David O'Regan",
			'Pat Conroy',
			'Charles Wesley',
			'Sergey Avdeychik',
			'Conor Kenny',
		],
	},
	{
		place: 'Third',
		numeral: '3',
		team: 'Team 2',
		medal: 'bronze' as const,
		order: 'sm:order-3',
		step: 'sm:h-24',
		size: 'sm:text-6xl',
		members: [
			'JP Fitzpatrick',
			'Marina V.',
			'Cesar Alba Moreno',
			'Anna Nikitchenko',
		],
	},
];

// Gold, silver and bronze. Each place uses one palette for its numeral, the
// top edge and fill of its step, and its team label.
const medals = {
	gold: {
		numeral: 'from-amber-100 via-amber-300 to-yellow-600',
		step: 'border-t-amber-300/70 border-x-amber-300/15 from-amber-300/20',
		label: 'text-amber-200/90',
	},
	silver: {
		numeral: 'from-slate-50 via-slate-300 to-slate-500',
		step: 'border-t-slate-200/60 border-x-slate-200/10 from-slate-200/10',
		label: 'text-slate-200/90',
	},
	bronze: {
		numeral: 'from-orange-200 via-orange-400 to-amber-700',
		step: 'border-t-orange-300/60 border-x-orange-300/10 from-orange-300/10',
		label: 'text-orange-200/90',
	},
} as const;

export default function Winner() {
	return (
		<section
			id="winners"
			className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			{/* Warmer glow than the neighbouring sections, so the result reads as
			    the one celebratory moment on the page */}
			<div className="absolute left-1/2 top-0 -translate-x-1/2 h-[50vh] w-[70vh] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.10)_0%,_transparent_65%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						19 September 2026 &middot; The Result
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-white leading-[1.05] max-w-4xl mb-6">
					Team 10 won the first{' '}
					<span className="italic inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent pr-2">
						DubLINK.
					</span>
				</h2>

				<p className="text-lg sm:text-xl text-white/60 max-w-3xl mb-14 leading-relaxed">
					Six teams presented, judged on the failures they found, teamwork,
					creativity, the questions they asked and clarity.
				</p>

				{/* The podium: second, first, third across wide screens, standing on
				    one floor line; stacked first to third on phones */}
				<ol className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:items-end sm:gap-4 sm:border-b sm:border-white/15">
					{podium.map((entry) => (
						<li
							key={entry.team}
							className={`flex rounded-2xl border border-white/10 bg-white/[0.03] sm:flex-col-reverse sm:rounded-none sm:border-0 sm:bg-transparent ${entry.order}`}
						>
							{/* The step, carrying the place */}
							<div
								className={`flex w-16 shrink-0 justify-center pt-5 sm:w-full sm:rounded-t-2xl sm:border-x sm:border-t-2 sm:bg-black/50 sm:bg-gradient-to-b to-transparent sm:pt-6 ${medals[entry.medal].step} ${entry.step}`}
							>
								<span className="sr-only">{entry.place} place</span>
								<span
									aria-hidden="true"
									className={`bg-gradient-to-b bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent ${entry.size} ${medals[entry.medal].numeral}`}
								>
									{entry.numeral}
								</span>
							</div>

							{/* Who stood on it */}
							<div className="flex-1 py-5 pr-5 sm:px-3 sm:pb-6 sm:pt-0 sm:text-center">
								<p
									className={`text-[0.7rem] uppercase tracking-[0.25em] font-bold ${medals[entry.medal].label}`}
								>
									{entry.team}
								</p>
								<ul className="mt-3 space-y-1.5 text-sm sm:text-base text-white/80 leading-snug">
									{entry.members.map((member) => (
										<li key={member}>{member}</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
