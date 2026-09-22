import { Trophy } from 'lucide-react';

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

// Second and third place. Names are not shown yet: unlike the winners, these
// teams have not been asked. The section invites them to get in touch.
const podium = [
	{ place: 'Second', team: 'Team 9' },
	{ place: 'Third', team: 'Team 2' },
];

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
					<div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 ring-1 ring-teal-400/40">
						<Trophy className="h-7 w-7 text-teal-300" />
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

				{/* The winning team, six across on wide screens */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
					{winners.map((person) => (
						<div
							key={person.name}
							className="group relative rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-400/[0.07] to-transparent hover:border-teal-400/50 transition-all duration-300 px-5 py-7 text-center overflow-hidden"
						>
							<div className="absolute -top-10 -right-10 h-24 w-24 bg-teal-400/0 group-hover:bg-teal-400/15 blur-2xl rounded-full transition-all duration-500" />

							<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/25 to-cyan-500/20 ring-2 ring-teal-400/40 group-hover:ring-teal-400/70 text-teal-200 font-bold transition-all">
								{person.initials}
							</div>
							<h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
								{person.name}
							</h3>
							<p className="mt-1 text-xs font-medium text-teal-300/70">
								Team 10
							</p>
						</div>
					))}
				</div>

				{/* Second and third */}
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					{podium.map((entry) => (
						<div
							key={entry.team}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-6 flex items-baseline gap-4"
						>
							<span className="text-[0.7rem] uppercase tracking-[0.25em] text-teal-300/70 font-bold">
								{entry.place}
							</span>
							<span className="text-lg font-bold text-white tracking-tight">
								{entry.team}
							</span>
						</div>
					))}
				</div>

				<p className="mt-6 text-sm sm:text-base text-white/50 leading-relaxed max-w-3xl">
					If you were on the team that came second or third and would like to be
					named here, email{' '}
					<a
						href="mailto:dublink.llmathon@gmail.com"
						className="text-teal-300/90 hover:text-teal-200 underline underline-offset-4"
					>
						dublink.llmathon@gmail.com
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
