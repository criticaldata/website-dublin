type Organizer = {
	name: string;
	affiliation: string;
	image: string | null;
};

const organizers: Organizer[] = [
	// Leadership — pinned to the top
	{
		name: 'Leo Anthony Celi',
		affiliation: 'MIT · Harvard Medical School',
		image: '/sf-2026-organizers/Leo A Celi.jpg',
	},
	{
		name: 'Rahul Gorijavolu',
		affiliation: 'Johns Hopkins University · MIT',
		image: '/sf-2026-organizers/Rahul Gorijavolu.jpeg',
	},
	{
		name: 'Leslie Espinoza Campomanes',
		affiliation: 'Anatomage · Stanford University',
		image: '/sf-2026-organizers/Leslie Espinoza Campomanes.jpeg',
	},
	{
		name: 'Mena Ramos',
		affiliation: 'Global Ultrasound Institute · MIT Critical Data',
		image: '/sf-2026-organizers/Mena Ramos.jpeg',
	},
	// Rest — order randomized
	{
		name: 'Boya Zhang',
		affiliation: 'MIT · Universit\u00e9 de Gen\u00e8ve',
		image: '/sf-2026-organizers/Boya Zhang.jpeg',
	},
	{
		name: 'Khushboo Teotia',
		affiliation: 'UC Berkeley',
		image: '/sf-2026-organizers/Khushboo Teotia.jpeg',
	},
	{
		name: 'Rodrigo Gameiro',
		affiliation: 'Harvard Medical School · MIT',
		image: '/sf-2026-organizers/Rodrigo Gameiro.jpg',
	},
	{
		name: 'Bhav Jain',
		affiliation: 'Stanford University School of Medicine',
		image: '/sf-2026-organizers/Bhav Jain.jpg',
	},
	{
		name: 'Thomas Sounack',
		affiliation: 'Dana-Farber Cancer Institute',
		image: '/sf-2026-organizers/Thomas Sounack.jpeg',
	},
	{
		name: 'Kaushik Madapati',
		affiliation: 'UC Berkeley',
		image: '/sf-2026-organizers/Kaushik Madapati.jpeg',
	},
	{
		name: 'Ricardo Kleinlein',
		affiliation: 'Harvard Medical School · Brigham & Women\u2019s Hospital',
		image: '/sf-2026-organizers/Ricardo Kleinlein.jpeg',
	},
	{
		name: 'Qingpeng Kong',
		affiliation: 'UC Berkeley',
		image: '/sf-2026-organizers/Qingpeng Kong.jpeg',
	},
	{
		name: 'Freddie Seba',
		affiliation: 'Innovation Hub Advisors · UIC',
		image: '/sf-2026-organizers/Freddie Seba.jpeg',
	},
	{
		name: 'Monique de Villa',
		affiliation: 'UCSF Neuroscape · University of San Francisco',
		image: '/sf-2026-organizers/Monique de Villa.jpeg',
	},
	{
		name: 'Priyanka Bodagala',
		affiliation: 'UCSF · University of San Francisco',
		image: '/sf-2026-organizers/Priyanka Bodagala.jpeg',
	},
	{
		name: 'Dhanashree Nerkar',
		affiliation: 'HarmonyIQ Fertility',
		image: '/sf-2026-organizers/DhanashreeNerkar.png',
	},
	{
		name: 'Marcus Detry',
		affiliation: 'Top Tier Capital Partners · Cornell Johnson',
		image: '/sf-2026-organizers/Marcus Detry.jpg',
	},
];

export default function Organizers() {
	return (
		<section className="relative bg-black/60 py-28 sm:py-36 overflow-hidden">
			{/* Soft radial glow */}
			<div className="absolute right-0 top-1/3 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.06)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Organizers & Mentors
					</span>
				</div>

				{/* Editorial headline */}
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl mb-16">
					The people behind{' '}
					<span className="italic inline-block bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent pr-2">
						the gathering.
					</span>
				</h2>

				{/* Organizers grid — editorial portraits */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-14">
					{organizers.map((person, i) => (
						<div
							key={person.name}
							className="group relative flex flex-col"
						>
							{/* Index number */}
							<span className="font-mono text-[0.65rem] text-white/25 mb-3 tabular-nums tracking-tight">
								{String(i + 1).padStart(2, '0')}
							</span>

							{/* Portrait — square with slight radius */}
							<div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-4 border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
								{/* Gradient overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

								{person.image ? (
									<img
										src={person.image}
										alt={person.name}
										className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
									/>
								) : (
									<div className="h-full w-full bg-gradient-to-br from-red-900/40 via-amber-800/30 to-orange-900/40 flex items-center justify-center">
										<span className="text-3xl font-bold text-white/60">
											{person.name
												.split(' ')
												.map((n) => n[0])
												.join('')
												.slice(0, 2)}
										</span>
									</div>
								)}
							</div>

							{/* Name + affiliation */}
							<h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors duration-300">
								{person.name}
							</h3>
							<p className="text-xs text-white/40 mt-1 leading-snug">
								{person.affiliation}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
