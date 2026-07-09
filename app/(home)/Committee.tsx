const committee = [
	{
		name: 'Dr Muhammad Ali',
		role: 'Researcher and educator in artificial intelligence and digital health, coordinating workshop development and scientific content.',
	},
	{
		name: 'Mr Sebastian Cajas',
		role: 'AI researcher at MIT Critical Data.',
	},
	{
		name: 'Dr Leo Anthony Celi',
		role: 'Clinical advisor and internationally recognised expert in AI, critical care and health data science.',
	},
	{
		name: 'Dr Daria Kalinska-Lysiak',
		role: 'Clinician, data scientist, clinical educator and researcher with interests in clinical innovation, simulation, precision and personalized medicine.',
	},
	{
		name: 'Dr Ezi Ozoani',
		role: 'AI researcher and innovation specialist with expertise in AI implementation, ethics and multidisciplinary collaboration.',
	},
	{
		name: 'Dr Tamas Tiszai-Szűcs',
		role: 'Consultant Intensivist at Tallaght University Hospital, Quality & Audit Lead, with interests in AI, patient safety and human factors.',
	},
];

export default function Committee() {
	return (
		<section className="relative bg-black/60 py-24 sm:py-32 overflow-hidden">
			<div className="absolute left-0 bottom-0 h-[40vh] w-[40vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Organising Committee
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-14">
					The team behind{' '}
					<span className="italic text-white/50">the day.</span>
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
					{committee.map((member) => (
						<div
							key={member.name}
							className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 hover:from-teal-400/[0.06] transition-all duration-300 px-6 py-7 overflow-hidden"
						>
							<div className="absolute -top-10 -right-10 h-24 w-24 bg-teal-400/0 group-hover:bg-teal-400/15 blur-2xl rounded-full transition-all duration-500" />
							<h3 className="text-lg font-bold text-white tracking-tight mb-2">
								{member.name}
							</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								{member.role}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
