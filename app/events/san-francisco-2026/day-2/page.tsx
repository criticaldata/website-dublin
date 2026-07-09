import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import {
	ArrowLeft,
	ArrowRightIcon,
	MapPin,
	Brain,
	Users,
	Coffee,
	Mic,
	Wrench,
	Compass,
	Target,
	Music,
	Cpu,
	Stethoscope,
	Video,
} from 'lucide-react';
import RenderParticles from '@/components/primitives/particles';
import Workshop1Detail from './Workshop1Detail';
import Workshop2Detail from './Workshop2Detail';

export const metadata: Metadata = {
	title: 'Day 2 — Open the Black Box | AI as a Catalyst, San Francisco',
	description:
		'Day 2 of AI as a Catalyst. Saturday, May 2, 2026 at the Shriram Center, Stanford. AI workshops: Art of Healing, LLM-athon, and HASTC.',
	openGraph: {
		title: 'Day 2 — Open the Black Box',
		description:
			'Saturday, May 2, 2026 at Stanford. Three AI workshops, two panels.',
		type: 'website',
	},
};

type Block = {
	time: string;
	title: string;
	kind:
		| 'opening'
		| 'panel'
		| 'workshop'
		| 'debrief'
		| 'break'
		| 'lunch'
		| 'wrap'
		| 'networking';
	people?: string;
	description?: string;
};

const programme: Block[] = [
	{
		time: '9:00 – 9:30 AM',
		kind: 'opening',
		title: 'Opening',
		description: 'Welcome and framing for the day.',
	},
	{
		time: '9:30 – 10:15 AM',
		kind: 'panel',
		title: 'What skills do we need to teach students in the age of AI?',
		people: 'Mena Ramos, Qingpeng Kong, Thomas Sounack, Boya Zhang',
	},
	{
		time: '10:15 – 10:45 AM',
		kind: 'break',
		title: 'Break',
	},
	{
		time: '10:45 – 11:45 AM',
		kind: 'workshop',
		title: 'Workshop 1 — The Art of Healing: Creativity as Medicine',
		description:
			'A workshop that positions music, visual art, storytelling, and embodied practice as essential, not supplementary, to training healers. Through improvisation, reflective exercises, and collaborative creation, participants develop curricular prototypes that build the empathy, deep listening, and resilience that no algorithm can supply.',
	},
	{
		time: '11:45 – 12:00 PM',
		kind: 'debrief',
		title: 'Workshop 1 Debrief',
	},
	{
		time: '12:00 – 1:00 PM',
		kind: 'lunch',
		title: 'Lunch',
	},
	{
		time: '1:00 – 1:45 PM',
		kind: 'panel',
		title: 'How do we take control of the AI narrative from the tech companies?',
		people: 'Rahul Gorijavolu, Dhanashree Nerkar, Khushboo Teotia, Rodrigo Gameiro',
	},
	{
		time: '1:45 – 2:45 PM',
		kind: 'workshop',
		title: 'Workshop 2 — LLM-athon',
		description:
			'A hands-on, multilingual stress-testing workshop in which participants probe clinical large language models for hallucination, sycophancy, cultural bias, and diagnostic reasoning failures. Teams construct adversarial prompts across languages and clinical scenarios, generating structured evaluation data that exposes the gap between AI marketing claims and bedside performance.',
	},
	{
		time: '2:45 – 3:00 PM',
		kind: 'debrief',
		title: 'Workshop 2 Debrief',
	},
	{
		time: '3:30 – 4:00 PM',
		kind: 'break',
		title: 'Break',
	},
	{
		time: '4:00 – 5:00 PM',
		kind: 'workshop',
		title: 'Workshop 3 — Health AI Systems Thinking for Community (HASTC)',
		description:
			'A structured, community-centered audit of AI tools deployed in clinical settings. Participants from diverse disciplines evaluate real health AI systems for bias, equity gaps, and hidden assumptions, producing actionable recommendations that travel back to the institutions deploying these tools. HASTC operationalizes the principle that those most affected by algorithmic decisions should lead their evaluation.',
	},
	{
		time: '5:00 – 5:15 PM',
		kind: 'debrief',
		title: 'Workshop 3 Debrief',
	},
	{
		time: '5:15 – 5:30 PM',
		kind: 'wrap',
		title: 'Wrap Up & Next Steps',
	},
	{
		time: '5:30 – 6:00 PM',
		kind: 'networking',
		title: 'Networking',
	},
];

const KIND_META: Record<Block['kind'], { label: string; Icon: typeof Mic; tint: string }> = {
	opening: { label: 'Opening', Icon: Compass, tint: 'text-indigo-200/85' },
	panel: { label: 'Panel', Icon: Mic, tint: 'text-indigo-200/85' },
	workshop: { label: 'Workshop', Icon: Wrench, tint: 'text-indigo-200/85' },
	debrief: { label: 'Debrief', Icon: Target, tint: 'text-white/45' },
	break: { label: 'Break', Icon: Coffee, tint: 'text-white/35' },
	lunch: { label: 'Lunch', Icon: Coffee, tint: 'text-white/35' },
	wrap: { label: 'Wrap', Icon: Compass, tint: 'text-white/45' },
	networking: { label: 'Networking', Icon: Users, tint: 'text-white/45' },
};

type WorkshopMeta = {
	id: string;
	number: '01' | '02' | '03';
	time: string;
	title: string;
	titleAccent: string;
	tagline: string;
	description: string;
	bullets: string[];
	Icon: typeof Mic;
	accent: 'indigo' | 'violet' | 'sky';
};

const workshops: WorkshopMeta[] = [
	{
		id: 'workshop-1',
		number: '01',
		time: '10:45 AM – 12:00 PM',
		title: 'The Art of Healing:',
		titleAccent: 'Creativity as medicine.',
		tagline:
			'Music, visual art, storytelling, and embodied practice — essential, not supplementary, to training healers.',
		description:
			'Through improvisation, reflective exercises, and collaborative creation, participants develop curricular prototypes that build the empathy, deep listening, and resilience that no algorithm can supply.',
		bullets: [
			'Hands-on improvisation, not lecture.',
			'Reflective and collaborative exercises in small groups.',
			'Output: curricular prototypes participants can take into their own teaching.',
		],
		Icon: Music,
		accent: 'violet',
	},
	{
		id: 'workshop-2',
		number: '02',
		time: '1:45 PM – 3:00 PM',
		title: 'LLM-athon:',
		titleAccent: 'Stress-testing clinical AI in the languages it claims to serve.',
		tagline:
			'A hands-on, multilingual probe of clinical large language models for hallucination, sycophancy, cultural bias, and diagnostic reasoning failures.',
		description:
			'Teams construct adversarial prompts across languages and clinical scenarios, generating structured evaluation data that exposes the gap between AI marketing claims and bedside performance.',
		bullets: [
			'Targets: hallucination, sycophancy, cultural bias, diagnostic reasoning failure.',
			'Multilingual by design — bring the languages your patients actually speak.',
			'Output: structured evaluation data, contributed back as a public artifact.',
		],
		Icon: Cpu,
		accent: 'indigo',
	},
	{
		id: 'workshop-3',
		number: '03',
		time: '4:00 PM – 5:15 PM',
		title: 'HASTC:',
		titleAccent: 'Health AI systems thinking, for community.',
		tagline:
			'A structured, community-centered audit of AI tools deployed in clinical settings.',
		description:
			'Participants from diverse disciplines evaluate real health AI systems for bias, equity gaps, and hidden assumptions — producing actionable recommendations that travel back to the institutions deploying these tools. HASTC operationalizes the principle that those most affected by algorithmic decisions should lead their evaluation.',
		bullets: [
			'Real systems, not toy examples.',
			'Cross-disciplinary teams: clinical, community, technical, policy.',
			'Output: recommendations sent to the institutions deploying the tools.',
		],
		Icon: Stethoscope,
		accent: 'sky',
	},
];

const ACCENT_THEME: Record<
	WorkshopMeta['accent'],
	{
		border: string;
		fromBg: string;
		glow: string;
		icon: string;
		kicker: string;
		dot: string;
	}
> = {
	indigo: {
		border: 'border-indigo-400/25',
		fromBg: 'from-indigo-500/[0.06] to-indigo-500/[0.01]',
		glow: 'bg-indigo-400/15',
		icon: 'text-indigo-200',
		kicker: 'text-indigo-200/80',
		dot: 'bg-indigo-300',
	},
	violet: {
		border: 'border-violet-400/25',
		fromBg: 'from-violet-500/[0.06] to-violet-500/[0.01]',
		glow: 'bg-violet-400/15',
		icon: 'text-violet-200',
		kicker: 'text-violet-200/80',
		dot: 'bg-violet-300',
	},
	sky: {
		border: 'border-sky-400/25',
		fromBg: 'from-sky-500/[0.06] to-sky-500/[0.01]',
		glow: 'bg-sky-400/15',
		icon: 'text-sky-200',
		kicker: 'text-sky-200/80',
		dot: 'bg-sky-300',
	},
};

export default function Day2Page() {
	return (
		<div className="relative bg-black">
			{/* Fixed particles background */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<RenderParticles />
			</div>

			<div className="relative z-10">
				<HeaderHero />
				<DayOverview />
				<Programme />
				{workshops.map((w) => (
					<Fragment key={w.id}>
						<WorkshopSection workshop={w} />
						{w.id === 'workshop-1' && <Workshop1Detail />}
						{w.id === 'workshop-2' && <Workshop2Detail />}
					</Fragment>
				))}
				<Closing />
			</div>
		</div>
	);
}

/* ─────────────────────────── HEADER / HERO ─────────────────────────── */
function HeaderHero() {
	return (
		<header className="relative overflow-hidden border-b border-white/5">
			{/* Grain overlay */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay z-[1]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Radial glows — indigo/violet for Day 2 */}
			<div className="absolute -top-1/4 -right-1/4 h-[80vh] w-[80vh] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.18)_0%,_transparent_60%)] pointer-events-none" />
			<div className="absolute -bottom-1/4 -left-1/4 h-[70vh] w-[70vh] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.14)_0%,_transparent_60%)] pointer-events-none" />

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />

			<div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pb-32">
				<Link
					href="/events/san-francisco-2026"
					className="inline-flex items-center gap-2 text-base text-white/50 hover:text-indigo-300 transition-colors mb-12 group"
				>
					<ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
					Back to event page
				</Link>

				{/* Kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-indigo-400/70" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-indigo-300 font-bold">
						Day 02 &middot; Saturday, May 2, 2026
					</span>
				</div>

				{/* Editorial headline */}
				<h1 className="font-bold tracking-tighter leading-[0.85]">
					<span className="block text-[16vw] sm:text-7xl lg:text-[8.5rem] bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent">
						Open the
					</span>
					<span className="block text-[16vw] sm:text-7xl lg:text-[8.5rem] italic bg-gradient-to-r from-indigo-300 via-violet-400 to-sky-400 bg-clip-text text-transparent pl-[6%] lg:pl-[10%] pr-4">
						Black Box.
					</span>
				</h1>

				<div className="mt-10 lg:mt-14 max-w-2xl lg:pl-[10%]">
					<p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 tracking-tight leading-snug">
						AI Workshops
					</p>
					<p className="mt-5 text-base sm:text-lg text-white/55 italic leading-relaxed max-w-xl">
						The AI systems being built right now will shape healthcare for billions. Almost nobody
						outside a handful of labs is asking the hard questions. Today, you will.
					</p>
				</div>

				{/* Info bar */}
				<div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 lg:pl-[10%]">
					<div className="flex items-center gap-3">
						<span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
						<span className="text-base text-white/80 font-semibold tracking-wide">
							9:00 AM – 6:00 PM
						</span>
					</div>
					<span className="hidden sm:inline h-4 w-px bg-white/20" />
					<span className="text-base text-white/80 font-semibold tracking-wide">
						Shriram Center, Stanford
					</span>
				</div>

				{/* Primary actions: Zoom + anchor links */}
				<div className="mt-12 lg:pl-[10%] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
					<a
						href="https://mit.zoom.us/my/rahulgorijavolu"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-indigo-400/40 bg-gradient-to-r from-indigo-500/15 via-indigo-500/10 to-transparent px-5 py-3.5 hover:border-indigo-300/70 hover:from-indigo-500/25 transition-all w-full sm:w-auto"
					>
						<span className="flex items-center gap-3">
							<Video className="h-5 w-5 text-indigo-300" />
							<span className="text-left">
								<span className="block text-[0.7rem] uppercase tracking-[0.2em] font-bold text-indigo-300/80">
									Joining virtually?
								</span>
								<span className="block text-base font-bold text-white">
									Open the Zoom link
								</span>
							</span>
						</span>
						<ArrowRightIcon className="h-5 w-5 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
					</a>

					<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
						<Link
							href="#programme"
							className="inline-flex items-center gap-2 text-base font-semibold text-indigo-300 hover:text-indigo-200 transition-colors group"
						>
							See the full programme
							<ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
						</Link>
						{workshops.map((w) => (
							<Fragment key={w.id}>
								<span className="hidden sm:inline h-4 w-px bg-white/15" />
								<Link
									href={`#${w.id}`}
									className="inline-flex items-center gap-2 text-base text-white/65 hover:text-indigo-300 transition-colors"
								>
									Workshop {w.number}
								</Link>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}

/* ────────────────────────── DAY OVERVIEW ────────────────────────── */
function DayOverview() {
	return (
		<section className="relative bg-black/60 py-24 sm:py-32 overflow-hidden">
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 10 L40 15 L35 20 L40 25 L35 30 L30 35 L25 30 L20 25 L25 20 L20 15 L25 10 Z' fill='none' stroke='%236366f1' stroke-width='0.5'/%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px',
				}}
			/>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-indigo-400/70" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-indigo-300 font-bold">
						The Day
					</span>
				</div>

				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl">
					The systems being built today will quietly decide who gets cared for tomorrow.{' '}
					<span className="italic bg-gradient-to-r from-indigo-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
						Day 2 is where we open them up.
					</span>
				</h2>

				<div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-14">
					<div className="lg:col-span-7">
						<p className="text-xl sm:text-2xl font-medium text-white/85 leading-snug tracking-tight">
							Teams will take apart real AI research, stress-test LLMs across languages, and
							prototype the guardrails that don&rsquo;t yet exist.
						</p>
					</div>
					<div className="lg:col-span-5">
						<div className="h-px w-16 bg-gradient-to-r from-indigo-400/70 to-transparent mb-6" />
						<p className="text-lg text-white/65 leading-relaxed font-light">
							Two panels. Three workshops. The day is hands-on by design — bring a laptop, bring
							curiosity, bring the questions you&rsquo;ve been holding back from the demos.
						</p>
					</div>
				</div>

				{/* Stats */}
				<div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
					{[
						{ value: '2', label: 'Panels' },
						{ value: '3', label: 'Workshops' },
						{ value: '9 hrs', label: 'Total programme' },
						{ value: 'Free', label: 'To attend' },
					].map((s) => (
						<div
							key={s.label}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-5 py-6 hover:border-indigo-400/40 hover:from-indigo-500/[0.06] transition-all"
						>
							<div className="text-4xl sm:text-5xl font-bold tracking-tighter bg-gradient-to-br from-indigo-200 to-indigo-400/60 bg-clip-text text-transparent">
								{s.value}
							</div>
							<div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55 font-semibold">
								{s.label}
							</div>
						</div>
					))}
				</div>

				{/* Venue + Virtual access */}
				<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div className="rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.06] to-indigo-500/[0.01] backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden">
						<div className="absolute -top-20 -right-20 h-48 w-48 bg-indigo-400/15 blur-3xl rounded-full pointer-events-none" />
						<div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
							<MapPin className="h-8 w-8 text-indigo-200 flex-shrink-0 mt-1" />
							<div>
								<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-indigo-200/85 font-bold mb-2">
									In Person
								</div>
								<div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
									Shriram Center
								</div>
								<div className="mt-2 text-base sm:text-lg text-white/65">
									443 Via Ortega, Stanford, CA
								</div>
							</div>
						</div>
					</div>

					<a
						href="https://mit.zoom.us/my/rahulgorijavolu"
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.07] to-indigo-500/[0.01] backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden hover:border-indigo-300/50 hover:from-indigo-500/[0.12] transition-all"
					>
						<div className="absolute -top-20 -right-20 h-48 w-48 bg-indigo-400/15 blur-3xl rounded-full pointer-events-none" />
						<div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
							<Video className="h-8 w-8 text-indigo-300 flex-shrink-0 mt-1" />
							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2 mb-2">
									<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-indigo-300/85 font-bold">
										Virtual
									</div>
									<span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-indigo-200">
										<span className="h-1.5 w-1.5 rounded-full bg-indigo-300 animate-pulse" />
										Live
									</span>
								</div>
								<div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
									Join via Zoom
								</div>
								<div className="mt-2 text-base sm:text-lg text-indigo-200/85 break-all underline-offset-4 group-hover:underline">
									mit.zoom.us/my/rahulgorijavolu
								</div>
								<div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 group-hover:gap-3 transition-all">
									Open Zoom
									<ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

/* ─────────────────────────── PROGRAMME ─────────────────────────── */
function Programme() {
	return (
		<section id="programme" className="relative bg-black/60 py-24 sm:py-32 overflow-hidden">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-indigo-400/70" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-indigo-300 font-bold">
						Programme
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl">
					Saturday,{' '}
					<span className="italic bg-gradient-to-r from-indigo-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
						hour by hour.
					</span>
				</h2>

				<div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 sm:p-10">
					<ol className="relative">
						<div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/40 via-white/10 to-white/5" />

						{programme.map((b, i) => {
							const meta = KIND_META[b.kind];
							const Icon = meta.Icon;
							const accent = b.kind === 'workshop' || b.kind === 'panel';
							return (
								<li
									key={b.time + b.title}
									className="relative flex gap-5 sm:gap-7 pb-7 last:pb-0"
								>
									<div className="relative flex-shrink-0 pt-2">
										<div
											className={`relative h-[15px] w-[15px] rounded-full ring-4 ring-black/60 ${
												accent ? 'bg-indigo-300' : 'bg-white/30'
											}`}
										>
											{accent && (
												<div className="absolute inset-0 rounded-full bg-indigo-300 opacity-40 animate-pulse" />
											)}
										</div>
									</div>

									<div className="flex-1 min-w-0">
										<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
											<span className="font-mono text-sm sm:text-base font-bold tabular-nums text-white/80 tracking-tight">
												{b.time}
											</span>
											<span
												className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold ${meta.tint}`}
											>
												<Icon className="h-3.5 w-3.5" />
												{meta.label}
											</span>
										</div>
										<p
											className={`text-lg sm:text-xl leading-snug font-semibold tracking-tight ${
												accent ? 'text-white' : 'text-white/65'
											}`}
										>
											{b.title}
										</p>
										{b.people && (
											<p className="mt-1.5 text-base text-white/65 italic">
												with {b.people}
											</p>
										)}
										{b.description && (
											<p className="mt-2 text-base text-white/65 leading-relaxed max-w-2xl">
												{b.description}
											</p>
										)}
									</div>

									<span
										className="hidden sm:block flex-shrink-0 font-mono text-[0.65rem] text-white/20 tabular-nums pt-2.5"
										aria-hidden
									>
										{String(i + 1).padStart(2, '0')}
									</span>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
}

/* ─────────────────────────── WORKSHOP SECTION ─────────────────────────── */
function WorkshopSection({ workshop }: { workshop: WorkshopMeta }) {
	const theme = ACCENT_THEME[workshop.accent];
	const Icon = workshop.Icon;
	return (
		<section
			id={workshop.id}
			className="relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div
				className={`absolute -top-1/4 -right-1/4 h-[60vh] w-[60vh] ${theme.glow} blur-3xl rounded-full pointer-events-none opacity-60`}
			/>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-indigo-400/70" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-indigo-300 font-bold">
						Workshop {workshop.number} &middot; {workshop.time}
					</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-7">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
							{workshop.title}{' '}
							<span className="italic bg-gradient-to-r from-indigo-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
								{workshop.titleAccent}
							</span>
						</h2>
						<p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
							{workshop.tagline}
						</p>
						<p className="mt-4 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl">
							{workshop.description}
						</p>
					</div>

					<div className="lg:col-span-5">
						<div
							className={`rounded-3xl border ${theme.border} bg-gradient-to-br ${theme.fromBg} backdrop-blur-xl p-8 relative overflow-hidden h-full`}
						>
							<div
								className={`absolute -top-20 -right-20 h-48 w-48 ${theme.glow} blur-3xl rounded-full pointer-events-none`}
							/>
							<div className="relative">
								<div className="flex items-start justify-between mb-6">
									<Icon className={`h-9 w-9 ${theme.icon}`} />
									<span
										className={`text-7xl font-bold tracking-tighter leading-none bg-gradient-to-br from-white/70 via-white/30 to-white/5 bg-clip-text text-transparent`}
									>
										{workshop.number}
									</span>
								</div>

								<div
									className={`text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] ${theme.kicker} font-bold mb-3`}
								>
									What to expect
								</div>
								<ul className="space-y-3 text-base sm:text-lg text-white/80 leading-relaxed">
									{workshop.bullets.map((b) => (
										<li key={b} className="flex gap-3">
											<span
												className={`flex-shrink-0 mt-2.5 h-2 w-2 rounded-full ${theme.dot}`}
											/>
											<span>{b}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────── CLOSING ────────────────────────── */
function Closing() {
	return (
		<section className="relative bg-black/60 py-28 sm:py-36 overflow-hidden">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[80vh] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.12)_0%,_transparent_55%)] pointer-events-none" />

			<div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
				<div className="inline-flex items-center gap-4 mb-10">
					<div className="h-px w-12 bg-indigo-400/70" />
					<span className="text-[0.7rem] uppercase tracking-[0.3em] text-indigo-300 font-bold">
						See you Saturday
					</span>
					<div className="h-px w-12 bg-indigo-400/70" />
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
					Bring your laptop, bring{' '}
					<span className="italic bg-gradient-to-r from-indigo-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
						the hard questions.
					</span>
				</h2>
				<p className="text-base sm:text-lg text-white/55 mb-10 leading-relaxed">
					May 2, 2026 &middot; 9:00 AM at Shriram Center, Stanford, 443 Via Ortega.
				</p>

				<Link
					href="/events/san-francisco-2026"
					className="inline-flex items-center gap-2 text-base text-white/60 hover:text-indigo-300 transition-colors group"
				>
					<ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
					Back to event page
				</Link>
			</div>
		</section>
	);
}
