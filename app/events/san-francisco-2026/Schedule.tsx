import Link from 'next/link';
import { MapPin, Lightbulb, Brain, ArrowRight } from 'lucide-react';

type Session = {
	time: string;
	type: 'panel' | 'workshop' | 'keynote';
	title: string;
};

const days = [
	{
		number: '01',
		day: 'Day 1',
		date: 'Friday, May 1, 2026',
		venue: 'Threshold Ventures',
		address: '630 Ramona St, Palo Alto, CA 94301',
		subtitle: 'Innovation & Entrepreneurship',
		theme: 'Rebuild the Blueprint',
		href: '/events/san-francisco-2026/day-1',
		description:
			'Investors, founders, researchers, clinicians, and community leaders, in the same room in downtown Palo Alto. Teams will prototype new funding models, pressure-test ideas with investors live in the room, and walk out with a blueprint for building better companies.',
		sessions: [
			{
				time: '9:30 AM',
				type: 'panel',
				title: 'Reimagining Startups & Entrepreneurship',
			},
			{
				time: '10:45 AM',
				type: 'workshop',
				title: 'Reimagining Startups & Entrepreneurship',
			},
			{
				time: '1:00 PM',
				type: 'panel',
				title: 'Whose values get funded?',
			},
			{
				time: '1:45 PM',
				type: 'workshop',
				title:
					'The Moral Vulnerability Audit: Stress-Testing Startup Ideas for Unintended Harm',
			},
			{
				time: '4:00 PM',
				type: 'keynote',
				title: 'Reverse Shark Tank',
			},
		] as Session[],
		accent: {
			border: 'border-amber-500/20',
			bg: 'from-amber-500/[0.08] to-amber-500/[0.02]',
			glow: 'bg-amber-500/10',
			badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
			icon: 'text-amber-400',
			kicker: 'text-amber-300/80',
			tag: 'bg-amber-500/10 text-amber-300/90 border-amber-500/20',
			tickColor: 'bg-amber-400',
			number:
				'bg-gradient-to-br from-amber-400/70 via-amber-500/30 to-amber-500/5',
		},
		Icon: Lightbulb,
	},
	{
		number: '02',
		day: 'Day 2',
		date: 'Saturday, May 2, 2026',
		venue: 'Shriram Center, Stanford',
		address: '443 Via Ortega, Stanford',
		subtitle: 'AI Workshops',
		theme: 'Open the Black Box',
		description:
			'The AI systems being built right now will shape healthcare for billions, and almost nobody outside a handful of labs is asking the hard questions. You will be. Teams will take apart real AI research, stress-test LLMs across languages, and prototype the guardrails that don\u2019t yet exist.',
		sessions: [
			{
				time: '9:30 AM',
				type: 'panel',
				title: 'What skills do we need to teach students in the age of AI?',
			},
			{
				time: '10:45 AM',
				type: 'workshop',
				title: 'The Art of Healing: Creativity as Medicine',
			},
			{
				time: '1:00 PM',
				type: 'panel',
				title: 'How do we take control of the AI narrative from the tech companies?',
			},
			{
				time: '1:45 PM',
				type: 'workshop',
				title: 'LLM-athon',
			},
			{
				time: '4:00 PM',
				type: 'workshop',
				title: 'Health AI Systems Thinking for Community (HASTC)',
			},
		] as Session[],
		accent: {
			border: 'border-indigo-400/20',
			bg: 'from-indigo-500/[0.08] to-indigo-500/[0.02]',
			glow: 'bg-indigo-500/10',
			badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/30',
			icon: 'text-indigo-300',
			kicker: 'text-indigo-300/80',
			tag: 'bg-indigo-500/10 text-indigo-300/90 border-indigo-400/20',
			tickColor: 'bg-indigo-300',
			number:
				'bg-gradient-to-br from-indigo-300/70 via-indigo-400/30 to-indigo-400/5',
		},
		Icon: Brain,
		href: '/events/san-francisco-2026/day-2' as string | undefined,
	},
];

const TYPE_LABELS: Record<Session['type'], string> = {
	panel: 'Panel',
	workshop: 'Workshop',
	keynote: 'Session',
};

export default function Schedule() {
	return (
		<section className="relative bg-black/60 py-28 sm:py-36 overflow-hidden">
			{/* Grain overlay */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						The Event
					</span>
				</div>

				{/* Editorial headline */}
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl">
					Two days.{' '}
					<span className="text-white/40">Two venues.</span>
					<br />
					<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-indigo-400 bg-clip-text text-transparent">
						One mission.
					</span>
				</h2>

				{/* Day cards */}
				<div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
					{days.map((day) => (
						<div
							key={day.day}
							className={`relative rounded-3xl border ${day.accent.border} bg-gradient-to-br ${day.accent.bg} backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 group overflow-hidden`}
						>
							{/* Glow blob */}
							<div
								className={`absolute -top-20 -right-20 h-48 w-48 ${day.accent.glow} blur-3xl rounded-full pointer-events-none`}
							/>

							<div className="relative">
								{/* Huge editorial number */}
								<div className="flex items-start justify-between mb-8">
									<span
										className={`text-7xl sm:text-8xl font-bold tracking-tighter leading-none ${day.accent.number} bg-clip-text text-transparent`}
									>
										{day.number}
									</span>
									<day.Icon
										className={`h-7 w-7 ${day.accent.icon} mt-4`}
									/>
								</div>

								{/* Kicker */}
								<div
									className={`text-[0.7rem] uppercase tracking-[0.25em] font-bold mb-2 ${day.accent.kicker}`}
								>
									{day.date} &middot; {day.subtitle}
								</div>

								{/* Theme */}
								<h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-5">
									{day.theme}
								</h3>

								{/* Description */}
								<p className="text-white/55 text-base leading-relaxed mb-6">
									{day.description}
								</p>

								{/* Programme — editorial timeline */}
								<div className="mb-8">
									<div className="flex items-center gap-3 mb-5">
										<div
											className={`text-[0.65rem] uppercase tracking-[0.3em] font-bold ${day.accent.kicker}`}
										>
											Programme
										</div>
										<div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
										<span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30">
											5 sessions
										</span>
									</div>

									<ol className="relative">
										{/* Vertical connector line */}
										<div
											className={`absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5`}
										/>

										{day.sessions.map((session, i) => (
											<li
												key={session.time + session.title}
												className="relative flex gap-5 pb-4 last:pb-0"
											>
												{/* Timeline dot */}
												<div className="relative flex-shrink-0 pt-1.5">
													<div
														className={`relative h-[15px] w-[15px] rounded-full ${day.accent.tickColor} ring-4 ring-black/60`}
													>
														<div
															className={`absolute inset-0 rounded-full ${day.accent.tickColor} opacity-40 animate-pulse`}
														/>
													</div>
												</div>

												{/* Session content */}
												<div className="flex-1 min-w-0">
													<div className="flex items-baseline gap-3 mb-1">
														<span className="font-mono text-xs font-semibold tabular-nums text-white/60 tracking-tight">
															{session.time}
														</span>
														<span
															className={`text-[0.6rem] uppercase tracking-[0.15em] font-bold ${day.accent.kicker}`}
														>
															{TYPE_LABELS[session.type]}
														</span>
													</div>
													<p className="text-sm sm:text-[0.95rem] text-white/85 leading-snug font-medium tracking-tight">
														{session.title}
													</p>
												</div>

												{/* Index number */}
												<span
													className="hidden sm:block flex-shrink-0 font-mono text-[0.6rem] text-white/20 tabular-nums pt-1.5"
													aria-hidden
												>
													{String(i + 1).padStart(2, '0')}
												</span>
											</li>
										))}
									</ol>
								</div>

								{/* Venue info — editorial bottom bar */}
								<div className="pt-6 border-t border-white/5 space-y-2">
									<div className="flex items-start gap-2.5 text-sm">
										<MapPin
											className={`h-4 w-4 mt-0.5 flex-shrink-0 ${day.accent.icon}`}
										/>
										<div>
											<div className="text-white/90 font-semibold">
												{day.venue}
											</div>
											<div className="text-white/40 text-xs mt-0.5">
												{day.address}
											</div>
										</div>
									</div>
								</div>

								{/* Deep-link to dedicated day page (when available) */}
								{day.href && (
									<Link
										href={day.href}
										className="mt-6 group/link relative flex items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/[0.12] via-amber-500/[0.06] to-transparent px-5 py-4 hover:border-amber-400/60 hover:from-amber-500/20 hover:via-amber-500/[0.1] transition-all overflow-hidden"
									>
										<div className="absolute -top-12 -right-12 h-24 w-24 bg-amber-500/0 group-hover/link:bg-amber-500/20 blur-2xl rounded-full transition-all duration-500" />
										<div className="relative">
											<div className="text-[0.6rem] uppercase tracking-[0.25em] font-bold text-amber-300/80 mb-0.5">
												Open the full programme
											</div>
											<div className="text-sm sm:text-base font-bold text-white tracking-tight">
												{day.day}: script, workshops, and Soul Report Card
											</div>
										</div>
										<ArrowRight className="relative h-5 w-5 text-amber-300 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
									</Link>
								)}
							</div>
						</div>
					))}
				</div>

				<p className="mt-10 text-center text-sm text-white/30 tracking-wide">
					Attend one day or both. Each offers a unique experience.
				</p>
			</div>
		</section>
	);
}
