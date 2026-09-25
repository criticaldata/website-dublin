import Image from 'next/image';

type Person = {
	name: string;
	credentials?: string;
	photo: string | null;
	photoPosition?: string;
	initials: string;
	role: string;
	bio: string;
	note?: string;
};

const guests: Person[] = [
	{
		name: 'Dr Natalie Cole',
		photo: '/dublin/panel/natalie-cole.jpg',
		initials: 'NC',
		role: 'Head of Innovation · Tallaght University Hospital',
		bio: 'Leads Innovate Health and the development of hospital-based healthcare innovation at Tallaght University Hospital. More than 20 years’ experience across health research and innovation, including roles as Assistant Professor of Neurogenetics at Northwestern Memorial Hospital in Chicago and Change and Benefits Lead in the Office of the CEO of the HSE.',
	},
	{
		name: 'Noeleen McHugh',
		photo: '/dublin/panel/noeleen-mchugh.jpg',
		initials: 'NM',
		role: 'Patient & Public Partnership Representative · National Screening Service',
		bio: 'Member of the National Screening Service AI and Robotic Process Automation Strategic Advisory Committee. Brings extensive experience in governance, innovation and national IT programmes, alongside the patient and public perspective on the safe and trustworthy introduction of AI into national screening services.',
	},
	{
		name: 'Seán Kirwan',
		photo: '/dublin/panel/sean-kirwan.jpg',
		initials: 'SK',
		role: 'Co-founder & CEO · MedWrite',
		bio: 'Digital-health entrepreneur and former pharmaceutical executive. As Global Director of Digital Health Solutions & Strategy at Novartis, he established its Global Digital Design Centre of Excellence. At MedWrite, his work focuses on applying AI and AI-enabled workflows to reduce the administrative burden on healthcare professionals.',
	},
];

function PersonCard({ person }: { person: Person }) {
	return (
		<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 hover:from-teal-400/[0.06] transition-all duration-300 px-6 py-7 overflow-hidden">
			<div className="absolute -top-10 -right-10 h-24 w-24 bg-teal-400/0 group-hover:bg-teal-400/15 blur-2xl rounded-full transition-all duration-500" />

			<div className="flex items-center gap-4 mb-4">
				{person.photo ? (
					<div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden ring-2 ring-teal-400/30 group-hover:ring-teal-400/60 transition-all">
						<Image
							src={person.photo}
							alt={person.name}
							fill
							sizes="64px"
							className={`object-cover ${person.photoPosition ?? ''}`}
						/>
					</div>
				) : (
					<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-2 ring-teal-400/30 group-hover:ring-teal-400/60 text-teal-200 font-bold text-lg transition-all">
						{person.initials}
					</div>
				)}
				<div>
					<h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
						{person.name}
						{person.credentials && (
							<span className="ml-1.5 text-xs font-normal text-white/40">
								{person.credentials}
							</span>
						)}
					</h3>
					<p className="mt-0.5 text-xs sm:text-sm font-medium text-teal-300/80">
						{person.role}
					</p>
					{person.note && (
						<p className="mt-1 inline-block rounded-full border border-teal-400/30 px-2 py-0.5 text-[11px] text-teal-200/80">
							{person.note}
						</p>
					)}
				</div>
			</div>

			<p className="text-sm text-white/50 leading-relaxed">{person.bio}</p>
		</div>
	);
}

export default function Panel() {
	return (
		<section
			id="panel"
			className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="absolute left-1/4 top-0 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Special Guests
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-6">
					Joining our panel on{' '}
					<span className="italic text-white/50">
						the future of AI in Irish healthcare.
					</span>
				</h2>
				<p className="text-base sm:text-lg text-white/50 max-w-3xl mb-14">
					The day closes at 16:00 with a panel bringing together perspectives
					from clinical practice, healthcare innovation, AI development and
					governance, industry, and patient and public involvement.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
					{guests.map((person) => (
						<PersonCard key={person.name} person={person} />
					))}
				</div>

				<p className="mt-10 text-sm sm:text-base text-white/50 max-w-3xl leading-relaxed">
					Joined on the panel by Dr Leo Anthony Celi (online), Dr John
					Sheehan and Ezi Ozoani, and moderated by Dr Muhammad Ali and Dr
					Tamás Tiszai-Szűcs.
				</p>
			</div>
		</section>
	);
}
