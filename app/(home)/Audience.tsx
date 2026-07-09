const audiences = [
	{
		label: 'Doctors & nurses',
		detail:
			'Clinicians of every grade and specialty who want to understand what LLMs can — and cannot — safely do in day-to-day patient care.',
	},
	{
		label: 'Allied health professionals',
		detail:
			'Pharmacists, physiotherapists, radiographers, dietitians and colleagues across the health service exploring how AI fits their practice.',
	},
	{
		label: 'Medical & healthcare students',
		detail:
			'Students of medicine, nursing and health sciences building the AI literacy their future careers will demand — no experience needed.',
	},
	{
		label: 'Patient advocates',
		detail:
			'Patient and public voices who will keep the discussion grounded in what matters: safe, fair and transparent care.',
	},
	{
		label: 'Researchers & data scientists',
		detail:
			'Academics and analysts working with health data who want to stress-test LLMs on realistic clinical problems.',
	},
	{
		label: 'Engineers & innovators',
		detail:
			'Software engineers, developers and founders building health AI tools who want direct feedback from the clinicians who would use them.',
	},
	{
		label: 'Healthcare managers & industry',
		detail:
			'Leaders and decision-makers responsible for how AI is procured, governed and rolled out across healthcare organisations.',
	},
];

export default function Audience() {
	return (
		<section className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden">
			{/* Subtle teal glow */}
			<div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Who Should Attend
					</span>
				</div>

				{/* Editorial headline */}
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-12">
					AI in healthcare needs{' '}
					<span className="italic text-white/50">every discipline</span> at the
					table.
				</h2>

				{/* Clear audience descriptions */}
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
					{audiences.map((audience) => (
						<li key={audience.label} className="group">
							<div className="flex items-center gap-3 mb-2">
								<span className="h-1.5 w-1.5 rounded-full bg-teal-400/80 group-hover:bg-teal-300 transition-colors" />
								<h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-teal-300 transition-colors duration-300">
									{audience.label}
								</h3>
							</div>
							<p className="pl-[18px] text-sm sm:text-base text-white/55 leading-relaxed">
								{audience.detail}
							</p>
						</li>
					))}
				</ul>

				<p className="mt-12 text-base sm:text-lg text-white/50 max-w-2xl">
					No prior AI experience required — the day is designed for complete
					beginners and experienced users alike.
				</p>
			</div>
		</section>
	);
}
