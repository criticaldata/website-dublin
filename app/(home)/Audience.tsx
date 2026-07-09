const audiences = [
	{ label: 'Doctors & nurses', connector: 'shaping', detail: 'care on the wards of Irish hospitals' },
	{ label: 'Allied health professionals', connector: 'bringing', detail: 'every corner of the health service' },
	{ label: 'Medical & healthcare students', connector: 'from', detail: 'campuses across Dublin and beyond' },
	{ label: 'Patient advocates', connector: 'keeping', detail: 'the patient voice at the centre' },
	{ label: 'Researchers & data scientists', connector: 'in', detail: 'AI, health and data science' },
	{ label: 'Engineers & innovators', connector: 'building', detail: 'the tools clinicians will actually use' },
	{ label: 'Healthcare managers & industry', connector: 'deciding', detail: 'how AI gets implemented in practice' },
];

export default function Audience() {
	return (
		<section className="relative bg-black/60 py-24 sm:py-32 overflow-hidden">
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

				{/* Flowing editorial list */}
				<ul className="space-y-3 sm:space-y-4 max-w-3xl">
					{audiences.map((audience) => (
						<li
							key={audience.label}
							className="group text-xl sm:text-2xl lg:text-[1.75rem] leading-snug tracking-tight text-white/45 transition-colors duration-300 hover:text-white/80"
						>
							<span className="font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
								{audience.label}
							</span>{' '}
							<span className="italic text-white/35">{audience.connector}</span>{' '}
							{audience.detail}.
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
