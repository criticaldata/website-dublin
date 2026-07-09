import PhotoGallery from '@/components/elements/PhotoGallery';

const photos = [
	{ src: '/dublin/photos/datathon-2015.jpg', alt: 'MIT Critical Data datathon, 2015' },
	{ src: '/dublin/photos/group-2017.jpg', alt: 'MIT Critical Data HST.953 group, 2017' },
	{ src: '/dublin/photos/mimic.jpeg', alt: 'Working with the MIMIC critical care database' },
];

export default function About() {
	return (
		<section
			id="about"
			className="scroll-mt-16 relative bg-black/60 py-28 sm:py-36 overflow-hidden"
		>
			{/* Celtic knot-inspired subtle pattern */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='18' fill='none' stroke='%2314b8a6' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='9' fill='none' stroke='%2314b8a6' stroke-width='0.5'/%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Soft radial glow */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.06)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						About the Event
					</span>
				</div>

				{/* Big editorial statement */}
				<h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1] max-w-5xl">
					A one-day interactive LLM-athon where Dublin&rsquo;s healthcare
					community{' '}
					<span className="italic inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent pr-2">
						puts AI to the test.
					</span>
				</h2>

				{/* Sub-hook */}
				<p className="mt-8 text-xl sm:text-2xl font-medium text-white/75 tracking-tight leading-snug max-w-4xl">
					Clinicians, researchers, healthcare professionals, patient advocates,
					students, engineers and innovators — exploring the practical use of
					Large Language Models and generative AI in healthcare.
				</p>

				{/* Supporting prose — two asymmetric columns */}
				<div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-14">
					<div className="lg:col-span-7">
						<p className="text-lg sm:text-xl text-white/70 leading-relaxed tracking-tight">
							The programme combines expert keynote lectures, interactive
							workshops and multidisciplinary panel discussions centred on
							realistic clinical and non-clinical healthcare scenarios.
							Participants from different backgrounds will work in small groups
							to compare different AI models, evaluate their outputs, identify
							strengths and limitations, explore common failure modes, and
							discuss how AI can be implemented safely, responsibly and
							effectively across healthcare.
						</p>
					</div>
					<div className="lg:col-span-5 lg:pt-2">
						<div className="h-px w-16 bg-gradient-to-r from-teal-400/60 to-transparent mb-6" />
						<p className="text-base sm:text-lg text-white/55 leading-relaxed font-light">
							Whether you are completely new to LLMs or already using AI in
							clinical practice, education or research, the event is designed
							to develop practical skills, encourage collaboration across
							disciplines and stimulate discussion on the future of AI in
							Irish healthcare.
						</p>
					</div>
				</div>

				{/* A global community — click any photo to enlarge */}
				<PhotoGallery
					photos={photos}
					className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
					itemClassName="aspect-[4/3]"
				/>

				{/* Decorative accent */}
				<div className="mt-20 flex items-center gap-4">
					<div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
					<span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-teal-400/40">
						19 September 2026 &middot; Dublin
					</span>
					<div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
				</div>
			</div>
		</section>
	);
}
