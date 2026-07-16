import Image from 'next/image';

const committee: {
	name: string;
	title: string;
	photo: string | null;
	photoPosition?: string;
	initials: string;
	role: string;
}[] = [
	{
		name: 'Dr Leo Anthony Celi',
		title: 'Clinical Advisor',
		photo: '/dublin/team/leo-celi.jpg',
		initials: 'LC',
		role: 'Advises on the clinical direction of the programme, drawing on years of datathons organised with MIT Critical Data around the world.',
	},
	{
		name: 'Mr Sebastian Cajas',
		title: 'Affiliate, MIT Critical Data',
		photo: '/dublin/team/sebastian-cajas.png',
		initials: 'SC',
		role: 'Researcher and technologist working at the intersection of human and AI systems, with a focus on generative AI in healthcare. Brings that perspective to the design and technical delivery of the day’s programme.',
	},
	{
		name: 'Dr Ezi Ozoani',
		title: 'AI Ethics & Implementation',
		photo: '/dublin/team/ezi-ozoani.webp',
		initials: 'EO',
		role: 'AI researcher and innovation specialist focused on how AI is implemented responsibly. Ensures ethics and multidisciplinary collaboration are built into every part of the day.',
	},
	{
		name: 'Dr Tamas Tiszai-Szűcs',
		title: 'Consultant Intensivist, TUH',
		photo: '/dublin/team/tamas-tiszai-szucs.jpg',
		// Portrait crop: keep the face centred in the circular avatar
		photoPosition: 'object-[center_22%]',
		initials: 'TT',
		role: 'Consultant Intensivist and Quality & Audit Lead at the host venue. Focused on AI, patient safety and human factors in clinical practice.',
	},
	{
		name: 'Dr Daria Kalinska-Lysiak',
		title: 'Clinician & Data Scientist',
		photo: '/dublin/team/daria-kalinska-lysiak.png',
		initials: 'DK',
		role: 'Clinician and data scientist, clinical educator and researcher. Brings a dual clinical–technical perspective, with interests in clinical innovation, simulation, and precision and personalised medicine.',
	},
	{
		name: 'Dr Muhammad Ali',
		title: 'Workshop & Scientific Content Lead',
		photo: '/dublin/team/muhammad-ali.jpg',
		// Face sits in the lower half of the frame
		photoPosition: 'object-[center_68%]',
		initials: 'MA',
		role: 'Researcher and educator in artificial intelligence and digital health. Leads the design of the day’s workshops and scientific content, shaping the clinical scenarios participants will work through.',
	},
];

export default function Committee() {
	return (
		<section
			id="team"
			className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="absolute left-0 bottom-0 h-[40vh] w-[40vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						The Team
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-6">
					The organising committee behind{' '}
					<span className="italic text-white/50">the day.</span>
				</h2>
				<p className="text-base sm:text-lg text-white/50 max-w-3xl mb-14">
					DubLINK is organised by a multidisciplinary team of clinicians, AI
					researchers and educators spanning the host venue, MIT
					Critical Data, MedWrite.ai and the wider Irish and international
					health AI community.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
					{committee.map((member) => (
						<div
							key={member.name}
							className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 hover:from-teal-400/[0.06] transition-all duration-300 px-6 py-7 overflow-hidden"
						>
							<div className="absolute -top-10 -right-10 h-24 w-24 bg-teal-400/0 group-hover:bg-teal-400/15 blur-2xl rounded-full transition-all duration-500" />

							<div className="flex items-center gap-4 mb-4">
								{member.photo ? (
									<div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden ring-2 ring-teal-400/30 group-hover:ring-teal-400/60 transition-all">
										<Image
											src={member.photo}
											alt={member.name}
											fill
											sizes="64px"
											className={`object-cover ${member.photoPosition ?? ''}`}
										/>
									</div>
								) : (
									<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-2 ring-teal-400/30 group-hover:ring-teal-400/60 text-teal-200 font-bold text-lg transition-all">
										{member.initials}
									</div>
								)}
								<div>
									<h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
										{member.name}
									</h3>
									<p className="mt-0.5 text-xs sm:text-sm font-medium text-teal-300/80">
										{member.title}
									</p>
								</div>
							</div>

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
