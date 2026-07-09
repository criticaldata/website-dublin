import Image from 'next/image';

const partners = [
	{
		name: 'Tallaght University Hospital',
		logo: '/dublin/partners/tallaght-university-hospital.png',
		width: 351,
		height: 143,
	},
	{
		name: 'Royal College of Surgeons in Ireland',
		logo: '/dublin/partners/rcsi.jpg',
		width: 1536,
		height: 948,
	},
	{
		name: 'MedWrite.ai',
		logo: '/dublin/partners/medwrite-ai.png',
		width: 516,
		height: 182,
	},
	{
		name: 'MIT Critical Data',
		logo: '/logo-mit.svg',
		width: 200,
		height: 105,
	},
	{
		name: 'PLOS Digital Health',
		logo: '/dublin/partners/plos-digital-health.png',
		width: 400,
		height: 150,
	},
];

export default function Partners() {
	return (
		<section
			id="partners"
			className="relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.06)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Partners
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-4">
					Made possible by{' '}
					<span className="italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
						our partners.
					</span>
				</h2>
				<p className="text-base sm:text-lg text-white/50 max-w-2xl mb-14">
					DubLINK is delivered with the support of leading Irish and
					international institutions in healthcare, research and AI.
				</p>

				{/* Logo wall — bold white cards so every mark reads clearly */}
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{partners.map((partner) => (
						<div
							key={partner.name}
							className="group relative flex items-center justify-center rounded-2xl bg-white/[0.97] px-8 py-10 min-h-[130px] sm:min-h-[160px] ring-1 ring-white/20 hover:ring-teal-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/30 transition-all duration-300"
						>
							<Image
								src={partner.logo}
								alt={partner.name}
								width={partner.width}
								height={partner.height}
								className="h-auto max-h-16 sm:max-h-20 w-auto max-w-full object-contain"
							/>
						</div>
					))}
				</div>

				<p className="mt-10 text-sm text-white/40">
					Interested in partnering or sponsoring?{' '}
					<a
						href="mailto:dublink.llmathon@gmail.com"
						className="text-teal-300/90 hover:text-teal-200 font-medium transition-colors"
					>
						Get in touch
					</a>
					.
				</p>
			</div>
		</section>
	);
}
