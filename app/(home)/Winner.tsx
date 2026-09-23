import { Trophy, Medal } from 'lucide-react';
import { PRIMARY_CONTACT } from '@/lib/organisers';

// Team 10, first place at DubLINK on 19 September 2026. Names as given on the
// day's attendance record; no affiliations, since the only affiliation field in
// that export is the host venue rather than each person's employer.
const winners = [
	{ name: 'Narod Daldal', initials: 'ND' },
	{ name: 'Sheila Zaragoza', initials: 'SZ' },
	{ name: "Jean O'Sullivan", initials: 'JO' },
	{ name: 'Apoorv Purohit', initials: 'AP' },
	{ name: 'Gabor Zilahi', initials: 'GZ' },
	{ name: 'Rabiat Muhammed', initials: 'RM' },
];

// Second and third place, named on 23 September from the lists the organisers
// supplied. Neither is complete: both teams had members nobody has a record
// of, so the section says so and invites them to get in touch.
const podium = [
	{
		place: 'Second',
		team: 'Team 9',
		medal: 'silver' as const,
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
		team: 'Team 2',
		medal: 'bronze' as const,
		members: [
			'JP Fitzpatrick',
			'Marina V.',
			'Cesar Alba Moreno',
			'Anna Nikitchenko',
		],
	},
];

// Gold, silver and bronze. Each place gets one palette, used for its medal
// disc, its card edge and its label, so the three read as a podium rather
// than as three identical cards.
const medals = {
	gold: {
		disc: 'from-amber-200/90 to-yellow-500/80 ring-amber-200/70 text-amber-950',
		card: 'border-amber-300/30 from-amber-300/[0.08] hover:border-amber-300/60',
		glow: 'group-hover:bg-amber-300/20',
		label: 'text-amber-200/90',
		initials:
			'from-amber-200/30 to-yellow-500/20 ring-2 ring-amber-200/50 group-hover:ring-amber-200/80 text-amber-100',
	},
	silver: {
		disc: 'from-slate-100/90 to-slate-400/80 ring-slate-200/70 text-slate-900',
		card: 'border-slate-300/25 from-slate-200/[0.06] hover:border-slate-200/50',
		glow: 'group-hover:bg-slate-200/15',
		label: 'text-slate-200/90',
		initials: '',
	},
	bronze: {
		disc: 'from-orange-300/90 to-amber-700/80 ring-orange-300/60 text-amber-950',
		card: 'border-orange-400/25 from-orange-400/[0.06] hover:border-orange-300/50',
		glow: 'group-hover:bg-orange-300/15',
		label: 'text-orange-200/90',
		initials: '',
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

				<div className="flex items-start gap-5 mb-6">
					<div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200/25 to-yellow-500/10 ring-1 ring-amber-200/50">
						<Trophy className="h-7 w-7 text-amber-200" />
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-white leading-[1.05] max-w-4xl">
						Team 10 won the first{' '}
						<span className="italic inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent pr-2">
							DubLINK.
						</span>
					</h2>
				</div>

				<p className="text-lg sm:text-xl text-white/60 max-w-3xl mb-14 leading-relaxed">
					Eleven judges scored every presentation on the failure found and
					explained, collaboration, creativity, the quality of the questions
					asked and clarity. Team 10 came first, topping the field on the
					failure they found, on the questions they asked and on clarity, with
					Team 9 second and Team 2 third.
				</p>

				{/* First place, with its gold medal */}
				<div className="flex items-center gap-4 mb-4">
					<div
						className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ring-2 shadow-lg shadow-amber-900/30 ${medals.gold.disc}`}
					>
						<Medal className="h-6 w-6" />
					</div>
					<div>
						<p className="text-[0.7rem] uppercase tracking-[0.25em] font-bold text-amber-200/90">
							First
						</p>
						<p className="text-lg font-bold text-white tracking-tight leading-tight">
							Team 10
						</p>
					</div>
				</div>

				{/* The winning team, six across on wide screens */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
					{winners.map((person) => (
						<div
							key={person.name}
							className={`group relative rounded-2xl border bg-gradient-to-br to-transparent transition-all duration-300 px-5 py-7 text-center overflow-hidden ${medals.gold.card}`}
						>
							<div
								className={`absolute -top-10 -right-10 h-24 w-24 bg-transparent blur-2xl rounded-full transition-all duration-500 ${medals.gold.glow}`}
							/>

							<div
								className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br font-bold transition-all ${medals.gold.initials}`}
							>
								{person.initials}
							</div>
							<h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
								{person.name}
							</h3>
							<p className="mt-1 text-xs font-medium text-amber-200/70">
								Team 10
							</p>
						</div>
					))}
				</div>

				{/* Second and third, with the members we can name */}
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					{podium.map((entry) => (
						<div
							key={entry.team}
							className={`group rounded-2xl border bg-gradient-to-br to-transparent px-6 py-6 transition-all duration-300 ${medals[entry.medal].card}`}
						>
							<div className="flex items-center gap-4">
								<div
									className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ring-2 shadow-lg shadow-black/30 ${medals[entry.medal].disc}`}
								>
									<Medal className="h-6 w-6" />
								</div>
								<div>
									<p
										className={`text-[0.7rem] uppercase tracking-[0.25em] font-bold ${medals[entry.medal].label}`}
									>
										{entry.place}
									</p>
									<p className="text-lg font-bold text-white tracking-tight leading-tight">
										{entry.team}
									</p>
								</div>
							</div>
							<ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-white/60">
								{entry.members.map((member, i) => (
									<li key={member}>
										{member}
										{i < entry.members.length - 1 && (
											<span className="text-white/25"> ·</span>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<p className="mt-6 text-sm sm:text-base text-white/50 leading-relaxed max-w-3xl">
					Both of those lists are incomplete. If you were on the team that came
					second or third and are not named here,{' '}
					<a
						href={PRIMARY_CONTACT.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal-300/90 hover:text-teal-200 underline underline-offset-4"
					>
						message {PRIMARY_CONTACT.name} on LinkedIn
					</a>{' '}
					and we will add you.
				</p>

				{/* Everyone else */}
				<div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-12">
					<div className="lg:col-span-7">
						<p className="text-base sm:text-lg text-white/60 leading-relaxed">
							Six teams presented, and the field below third place was close
							enough that the order is not worth reading anything into. Every
							team found something real. The finding they reached
							independently of one another: the models downgraded care once the
							patient&rsquo;s social context changed, with no change in the
							clinical picture, and none of the models asked for the
							information they were missing.
						</p>
					</div>
					<div className="lg:col-span-5">
						<p className="text-base sm:text-lg text-white/60 leading-relaxed">
							Those findings belong to the teams who made them, and they are
							the basis of a perspective piece now being written up for
							publication. Thank you to everyone who gave up a Saturday to
							stress test clinical AI with us.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
