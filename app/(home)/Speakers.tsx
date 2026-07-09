import Image from 'next/image';

const speakers = [
	{
		name: 'Dr Leo Anthony Celi',
		photo: '/dublin/speakers/leo-celi.jpg',
		role: 'Beth Israel Deaconess Medical Center · Harvard Medical School · MIT',
		bio: 'Intensivist at Beth Israel Deaconess Medical Center, Harvard Medical School, and Senior Research Scientist at MIT. Internationally recognised for his work in critical care, health data science, open science and responsible AI implementation.',
	},
	{
		name: 'Dr John Sheehan',
		photo: '/dublin/speakers/john-sheehan.jpg',
		role: 'Consultant Radiologist · Blackrock Health',
		bio: 'Irish consultant radiologist, educator and healthcare innovation leader with extensive experience in artificial intelligence, digital transformation and AI education within Irish healthcare.',
	},
];

export default function Speakers() {
	return (
		<section
			id="speakers"
			className="relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="absolute right-1/4 top-0 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Keynote Speakers
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-14">
					Learn from leaders in{' '}
					<span className="italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
						health AI.
					</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{speakers.map((speaker) => (
						<div
							key={speaker.name}
							className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 overflow-hidden"
						>
							<div className="relative aspect-[16/10] overflow-hidden">
								<Image
									src={speaker.photo}
									alt={speaker.name}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
							</div>
							<div className="p-7">
								<h3 className="text-2xl font-bold text-white tracking-tight">
									{speaker.name}
								</h3>
								<p className="mt-1 text-sm font-medium text-teal-300/80 tracking-wide">
									{speaker.role}
								</p>
								<p className="mt-4 text-sm sm:text-base text-white/55 leading-relaxed">
									{speaker.bio}
								</p>
							</div>
						</div>
					))}
				</div>

				<p className="mt-10 text-sm sm:text-base text-white/40 italic">
					Additional speakers will be announced.
				</p>
			</div>
		</section>
	);
}
