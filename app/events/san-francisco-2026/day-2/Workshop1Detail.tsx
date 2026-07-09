import {
	Quote,
	Settings2,
	Music,
	Eye,
	BookOpen,
	Cpu,
	Sparkles,
	Compass,
	StickyNote,
} from 'lucide-react';

const setupSteps: string[] = [
	'Cluster chairs into small groups of 4–6.',
	'One person per group is the reader (reads passages aloud and keeps the script open on a phone).',
	'One person per group is the timer.',
	'Phones are for reading this script and timing only — no notes.',
	'Have one small object visible at each table for Segment 3 (a water bottle, a key, a coffee cup, anything ordinary). If nothing is on the table, someone places their watch or wallet down.',
];

const arc: { time: string; title: string; Icon: typeof Music }[] = [
	{ time: '0:00 – 0:03', title: 'Opening — Art as a way of knowing', Icon: Sparkles },
	{ time: '0:03 – 0:18', title: 'Hearing what isn’t written (music)', Icon: Music },
	{ time: '0:18 – 0:32', title: 'Seeing without naming (slow looking)', Icon: Eye },
	{ time: '0:32 – 0:45', title: 'Stories without diagnosis', Icon: BookOpen },
	{ time: '0:45 – 0:55', title: 'From art to AI (verbal design)', Icon: Cpu },
	{ time: '0:55 – 1:00', title: 'Closing reflection', Icon: Compass },
];

type Round = {
	name: string;
	duration: string;
	instructions: string[];
	reflection?: { duration?: string; questions: string[] };
};

type Segment = {
	number: '01' | '02' | '03' | '04' | '05' | '06';
	timeRange: string;
	totalDuration: string;
	title: string;
	subtitle: string;
	purpose: string;
	rounds?: Round[];
	staticPanels?: { heading: string; body: string[] }[];
	readerClose?: string;
	Icon: typeof Music;
};

const segments: Segment[] = [
	{
		number: '01',
		timeRange: '0:00 – 0:03',
		totalDuration: '3 min',
		title: 'Opening',
		subtitle: 'Art as a way of knowing',
		purpose: 'Settle in. Read together, silently. Let the framing land before anyone speaks.',
		staticPanels: [
			{
				heading: 'Read this silently. When you finish, look up. When the whole group is looking up, you are ready to begin.',
				body: [
					'In medicine, we are trained to recognize patterns. In art, we are trained to notice difference.',
					'This workshop treats artistic practice as a way of knowing — not decoration, not wellness, not self-expression — but a discipline that trains attention, judgment, and care.',
					'What ways of seeing and listening does healing require — and where do we learn them?',
				],
			},
		],
		Icon: Sparkles,
	},
	{
		number: '02',
		timeRange: '0:03 – 0:18',
		totalDuration: '15 min',
		title: 'Hearing What Isn’t Written',
		subtitle: 'Music — rhythm, silence, and interpretation',
		purpose:
			'To show how meaning emerges through listening, timing, and silence — not instructions.',
		rounds: [
			{
				name: 'Round 1 — The Score',
				duration: '5 min',
				instructions: [
					'One person in the group taps a simple rhythm on the table or their hand.',
					'Everyone else listens without joining. Just listen.',
					'Continue for ~60 seconds, then stop.',
				],
				reflection: {
					duration: '~3 min',
					questions: [
						'What did you hear?',
						'Where did you expect change that didn’t come?',
						'What did the silences do?',
					],
				},
			},
			{
				name: 'Round 2 — Improvisation',
				duration: '6 min',
				instructions: [
					'The same rhythm starts again.',
					'This time, anyone may enter or leave the rhythm at will — tap with them, drop out, return.',
					'Let it evolve organically for ~90 seconds. Then stop.',
				],
				reflection: {
					duration: '~4 min',
					questions: [
						'What happened when there was no conductor?',
						'How did silence shape the music?',
						'Who decided when to enter or stop?',
						'Who held the rhythm when others dropped out?',
					],
				},
			},
		],
		readerClose:
			'Music trains sensitivity to timing, restraint, and response — capacities that rarely appear on a rubric.',
		Icon: Music,
	},
	{
		number: '03',
		timeRange: '0:18 – 0:32',
		totalDuration: '14 min',
		title: 'Seeing Without Naming',
		subtitle: 'Visual attention — slow looking in place of drawing',
		purpose:
			'To experience how training produces fast categorization, and how art retrains seeing by suspending the name.',
		rounds: [
			{
				name: 'Round 1 — Habit Looking',
				duration: '3 min',
				instructions: [
					'Each person silently picks a small ordinary object visible to them (something on the table, your own hand, a chair leg, a coffee lid, the texture of a wall). Don’t choose anything precious or unusual.',
					'Look at it in silence for 90 seconds. Don’t touch it. Don’t move. Just look.',
					'Notice what your attention does — where it rests, where it skips, when it gets bored.',
					'When the timer goes, stop. No discussion yet.',
				],
			},
			{
				name: 'Round 2 — Describing Without the Name',
				duration: '7 min',
				instructions: [
					'Pair up within your group (groups of 5: one trio is fine).',
					'Partner A describes the object to Partner B for 90 seconds. Two rules: you may not name the object or use its category word ("pen," "cup," "hand" — none of those). You must describe what is actually there: shape, weight, surface, light, edges, the space around it, what it resembles, what it doesn’t.',
					'Partner B may only ask one question, as many times as needed: "What else?"',
					'After 90 seconds, swap. Partner B picks a different object. Same rules.',
				],
				reflection: {
					duration: '4 min',
					questions: [
						'What did you see in Round 2 that you skipped in Round 1?',
						'What appeared only when you couldn’t use the name?',
						'What does an AI system "see" when it categorizes a patient, an image, a symptom? What does that speed cost?',
					],
				},
			},
		],
		readerClose:
			'The first round shows what habit and training tend to produce: a quick label, a closed file. The second shows what becomes possible when attention replaces performance. Most of medicine is the first round. Most of healing happens in the second.',
		Icon: Eye,
	},
	{
		number: '04',
		timeRange: '0:32 – 0:45',
		totalDuration: '13 min',
		title: 'Stories Without Diagnosis',
		subtitle: 'Storytelling — meaning without labels',
		purpose: 'To experience narrative as a clinical and ethical practice.',
		rounds: [
			{
				name: 'Round 1 — Raw Story',
				duration: '6 min',
				instructions: [
					'In your group, one person tells a short story (~2 min) about a moment of illness, care, or vulnerability — yours or someone close to you.',
					'Rules for the teller: no diagnosis, no clinical language, no explanations.',
					'Rule for listeners: do not interrupt. Just listen.',
				],
			},
			{
				name: 'Round 2 — Retelling',
				duration: '5 min',
				instructions: [
					'Another group member retells the same story — as a poem, a metaphor, or a short scene. Not fact-for-fact. Meaning-for-meaning.',
					'About 90 seconds. Then a second person can retell it differently if there’s time.',
				],
				reflection: {
					duration: '2 min',
					questions: [
						'What changed in the retelling?',
						'What was lost?',
						'What became clearer?',
					],
				},
			},
		],
		readerClose: 'Stories carry truths that labels cannot hold.',
		Icon: BookOpen,
	},
	{
		number: '05',
		timeRange: '0:45 – 0:55',
		totalDuration: '10 min',
		title: 'From Art to AI',
		subtitle: 'Verbal design — a constraint health AI builders should adopt',
		purpose:
			'To translate what you just experienced into a design constraint, refusal, or test for health AI systems — something specific enough that an engineer or product lead could act on it tomorrow. Spoken aloud, not written.',
		staticPanels: [
			{
				heading: 'Step 1 — Choose one practice you just did',
				body: [
					'Music / listening (timing, silence, response).',
					'Slow looking (delaying the category, staying with the particular).',
					'Storytelling (meaning that doesn’t survive translation).',
					'Ask: what did this practice reveal that AI tends to flatten?',
				],
			},
			{
				heading: 'Step 2 — Pick one of three deliverables. Talk it through.',
				body: [
					'Option A — A refusal. Complete the sentence: "A health AI tool should not be deployed for ___ if it cannot ___." Name a specific use case. Name a specific capacity drawn from your art form.',
					'Option B — A test. A single evaluation question — a litmus test — that any health AI tool must pass before clinical deployment. Drawn from your art form. Specific, answerable, uncomfortable.',
					'Option C — A missing data point. Something your art form revealed that no current health AI training dataset captures. Then say what would have to change for it to be captured — or whether capturing it would itself be a kind of harm.',
					'One person — the rapporteur — listens and assembles it in their head as the group talks.',
				],
			},
			{
				heading: 'Step 3 — At 9 minutes, the rapporteur delivers a 60-second pitch',
				body: [
					'Which option (A, B, or C) and what the constraint, test, or missing data point is.',
					'Which art form it came from.',
					'What it would block, expose, or change.',
					'Where in the AI pipeline it lives — training data, evaluation, deployment, or post-deployment audit.',
					'The group can correct or sharpen. By the end of the segment, everyone in the group should be able to repeat the pitch in one sentence.',
				],
			},
		],
		readerClose:
			'This is a prototype, not a polished proposal. The point is that you leave with words you can say out loud to someone shipping a model tomorrow.',
		Icon: Cpu,
	},
	{
		number: '06',
		timeRange: '0:55 – 1:00',
		totalDuration: '5 min',
		title: 'Closing Reflection',
		subtitle: 'Final beat — go around the group, one sentence each',
		purpose: '',
		staticPanels: [
			{
				heading: 'Reader reads aloud, slowly',
				body: [
					'Art does not make health AI softer. It makes the questions sharper — about what AI flattens, and what flattening costs.',
					'If we want systems that can sit with uncertainty, register what is unspoken, and serve without controlling, then these capacities have to shape what gets built — not get retrofitted onto what already shipped.',
					'What you choose to flatten signals what you believe healing is.',
				],
			},
			{
				heading: 'Final beat — one sentence each',
				body: [
					'"The capacity I will not let health AI flatten is ________."',
					'No discussion after. Just say it, hear the others, end.',
				],
			},
		],
		Icon: Compass,
	},
];

const facilitatorNotes: string[] = [
	'Pace is real. When a segment ends, end it. Conversations can continue at lunch.',
	'The deliverable is the rapporteur’s 60-second pitch in Segment 5 — a refusal, a test, or a missing data point for health AI. That’s what travels out of the room. If you want it to survive the day, ask the rapporteur to text it to themselves in the last 30 seconds.',
	'What changed from the original script: Segment 3 ("Seeing Differently") originally used a passed-around drawing exercise. Without paper, "slow looking + describing without the name" is the closest paper-free equivalent — same insight (training produces fast categorization; art retrains seeing), different medium.',
	'If you find paper later: the original drawing exercise is worth doing on its own — the experience of watching your drawing pass to someone else is hard to recreate in conversation.',
];

export default function Workshop1Detail() {
	return (
		<section className="relative bg-black/60 py-24 sm:py-32 overflow-hidden border-t border-white/5">
			<div className="absolute -bottom-1/4 -right-1/4 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-violet-400/70" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-violet-300 font-bold">
						Workshop 01 &middot; Full instructions
					</span>
				</div>

				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl">
					The Art of Healing —{' '}
					<span className="italic bg-gradient-to-r from-violet-300 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
						1 hour, no paper.
					</span>
				</h2>
				<p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl">
					This workshop runs from your group&rsquo;s table. No paper, no pencils, no laptops.
					Phones are for reading this script and keeping time — nothing else.
				</p>

				{/* Workshop intent */}
				<div className="mt-12 rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.06] via-indigo-500/[0.03] to-transparent p-8 sm:p-10 relative overflow-hidden">
					<div className="absolute -top-16 -left-16 h-40 w-40 bg-violet-400/15 blur-3xl rounded-full pointer-events-none" />
					<div className="relative">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-violet-300 font-bold mb-4">
							Workshop intent
						</div>
						<p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl">
							This workshop treats artistic practice not as a soft skill, but as a way of knowing
							that exposes what health AI flattens. Across music, slow looking, and storytelling,
							you&rsquo;ll experience capacities that clinical AI systems are built to compress,
							average, or ignore: timing and silence, attention that delays the category, meaning
							that doesn&rsquo;t survive translation into structured data. You&rsquo;ll close by
							designing — out loud — a constraint, refusal, or test that health AI builders should
							adopt before deployment.
						</p>
						<div className="mt-6 pt-6 border-t border-white/10">
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-violet-300/80 font-bold mb-2">
								Outcome
							</div>
							<p className="text-base sm:text-lg text-white/75 leading-relaxed">
								A lived sense of what AI flattens in healthcare, and one verbal design constraint
								your group can carry into its own work.
							</p>
						</div>
					</div>
				</div>

				{/* Setup */}
				<DetailMarker chapter="Setup" title="Before you start" Icon={Settings2} />
				<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10">
					<ul className="space-y-4">
						{setupSteps.map((s, i) => (
							<li key={s} className="flex gap-4 text-base sm:text-lg text-white/80 leading-relaxed">
								<span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 font-mono text-xs font-bold text-violet-200 tabular-nums">
									{String(i + 1).padStart(2, '0')}
								</span>
								<span>{s}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Arc overview */}
				<DetailMarker chapter="Arc" title="The 60 minutes at a glance" Icon={Compass} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{arc.map((row, i) => {
						const AIcon = row.Icon;
						return (
							<div
								key={row.time}
								className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 hover:border-violet-400/40 hover:from-violet-500/[0.05] transition-all"
							>
								<div className="flex items-baseline justify-between mb-3">
									<span className="font-mono text-sm font-bold tabular-nums text-violet-200">
										{row.time}
									</span>
									<span className="font-mono text-xs text-white/30 tabular-nums">
										{String(i + 1).padStart(2, '0')}
									</span>
								</div>
								<div className="flex items-start gap-3">
									<AIcon className="h-5 w-5 text-violet-300/80 flex-shrink-0 mt-1" />
									<div className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
										{row.title}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Segments */}
				{segments.map((seg) => (
					<SegmentBlock key={seg.number} segment={seg} />
				))}

				{/* Facilitator notes */}
				<DetailMarker chapter="Facilitator notes" title="A few things to remember" Icon={StickyNote} />
				<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10">
					<ul className="space-y-4">
						{facilitatorNotes.map((n) => (
							<li key={n} className="flex gap-3 text-base sm:text-lg text-white/75 leading-relaxed">
								<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-violet-300" />
								<span>{n}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function DetailMarker({
	chapter,
	title,
	Icon,
}: {
	chapter: string;
	title: string;
	Icon: typeof Music;
}) {
	return (
		<div className="mt-20 mb-8">
			<div className="flex flex-wrap items-center gap-3 mb-4">
				<Icon className="h-5 w-5 text-violet-300/80" />
				<div className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-violet-300">
					{chapter}
				</div>
				<div className="flex-1 h-px bg-gradient-to-r from-violet-400/30 to-transparent min-w-[2rem]" />
			</div>
			<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight max-w-4xl">
				{title}
			</h3>
		</div>
	);
}

function SegmentBlock({ segment }: { segment: Segment }) {
	const SIcon = segment.Icon;
	return (
		<div className="mt-20">
			{/* Segment header */}
			<div className="mb-8">
				<div className="flex flex-wrap items-center gap-3 mb-4">
					<span className="font-mono text-sm sm:text-base font-bold tabular-nums text-violet-200">
						Segment {segment.number}
					</span>
					<span className="hidden sm:inline h-4 w-px bg-white/15" />
					<span className="font-mono text-sm sm:text-base font-semibold tabular-nums text-white/70">
						{segment.timeRange}
					</span>
					<span className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1.5 font-mono text-sm font-bold tabular-nums text-violet-200">
						<span className="h-1.5 w-1.5 rounded-full bg-violet-300 animate-pulse" />
						{segment.totalDuration}
					</span>
				</div>
				<div className="flex items-start gap-4">
					<div className="flex-shrink-0 mt-1.5 sm:mt-2">
						<div className="rounded-xl border border-violet-400/30 bg-violet-500/10 p-2.5">
							<SIcon className="h-6 w-6 text-violet-200" />
						</div>
					</div>
					<div>
						<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight">
							{segment.title}
						</h3>
						<p className="mt-2 text-base sm:text-lg text-white/65 italic leading-snug">
							{segment.subtitle}
						</p>
					</div>
				</div>
				{segment.purpose && (
					<p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
						<span className="font-semibold text-white/85">Purpose: </span>
						{segment.purpose}
					</p>
				)}
			</div>

			{/* Static panels (Opening text, design steps, closing words) */}
			{segment.staticPanels && (
				<div className="space-y-4">
					{segment.staticPanels.map((panel) => (
						<div
							key={panel.heading}
							className="rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.05] to-transparent p-7 sm:p-9"
						>
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-violet-300 font-bold mb-4">
								{panel.heading}
							</div>
							<div className="space-y-3">
								{panel.body.map((line) => (
									<p
										key={line}
										className="text-base sm:text-lg text-white/85 leading-relaxed"
									>
										{line}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			)}

			{/* Rounds */}
			{segment.rounds && (
				<div className="space-y-5">
					{segment.rounds.map((round) => (
						<div
							key={round.name}
							className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-7 sm:p-9"
						>
							<div className="flex flex-wrap items-baseline gap-3 mb-5">
								<h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
									{round.name}
								</h4>
								<span className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 font-mono text-xs font-bold tabular-nums text-violet-200">
									{round.duration}
								</span>
							</div>
							<ol className="space-y-3">
								{round.instructions.map((inst, i) => (
									<li
										key={inst}
										className="flex gap-4 text-base sm:text-lg text-white/80 leading-relaxed"
									>
										<span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 font-mono text-xs font-bold text-violet-200 tabular-nums">
											{i + 1}
										</span>
										<span>{inst}</span>
									</li>
								))}
							</ol>
							{round.reflection && (
								<div className="mt-7 pt-6 border-t border-white/10">
									<div className="flex items-center gap-3 mb-4">
										<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-violet-300/80 font-bold">
											Group reflection
										</div>
										{round.reflection.duration && (
											<span className="font-mono text-xs font-semibold tabular-nums text-white/50">
												{round.reflection.duration}
											</span>
										)}
									</div>
									<ul className="space-y-2.5">
										{round.reflection.questions.map((q) => (
											<li
												key={q}
												className="flex gap-3 text-base sm:text-lg text-white/75 leading-relaxed italic"
											>
												<span className="flex-shrink-0 mt-2.5 h-1.5 w-1.5 rounded-full bg-violet-300" />
												<span>{q}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					))}
				</div>
			)}

			{/* Reader closes */}
			{segment.readerClose && (
				<div className="mt-6 rounded-3xl border border-violet-400/30 bg-gradient-to-br from-violet-500/[0.08] via-indigo-500/[0.04] to-transparent p-7 sm:p-8 relative overflow-hidden">
					<div className="absolute -top-12 -left-12 h-32 w-32 bg-violet-400/15 blur-3xl rounded-full pointer-events-none" />
					<div className="relative flex gap-4">
						<Quote className="h-6 w-6 text-violet-300 flex-shrink-0 mt-0.5" />
						<div>
							<div className="text-[0.7rem] uppercase tracking-[0.25em] font-bold text-violet-300/80 mb-2">
								Reader closes
							</div>
							<p className="text-lg sm:text-xl text-white/90 leading-relaxed italic">
								{segment.readerClose}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
