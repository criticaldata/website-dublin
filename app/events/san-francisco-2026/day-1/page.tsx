import type { Metadata } from 'next';
import Link from 'next/link';
import {
	ArrowLeft,
	ArrowRightIcon,
	MapPin,
	Lightbulb,
	Users,
	Coffee,
	Mic,
	Wrench,
	Compass,
	Target,
	ShieldAlert,
	AlertTriangle,
	TrendingUp,
	Building2,
	Sprout,
	Quote,
	Video,
} from 'lucide-react';
import RenderParticles from '@/components/primitives/particles';

export const metadata: Metadata = {
	title: 'Day 1 — Rebuild the Blueprint | AI as a Catalyst, San Francisco',
	description:
		'Day 1 of AI as a Catalyst. Friday, May 1, 2026 at Threshold Ventures, Palo Alto. Innovation & entrepreneurship: panels, two workshops, and a Reverse Shark Tank.',
	openGraph: {
		title: 'Day 1 — Rebuild the Blueprint',
		description:
			'Friday, May 1, 2026 at Threshold Ventures. Innovation & entrepreneurship.',
		type: 'website',
	},
};

type Block = {
	time: string;
	title: string;
	kind: 'opening' | 'panel' | 'workshop' | 'debrief' | 'break' | 'lunch' | 'keynote' | 'wrap' | 'networking';
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
		title: 'Reimagining Startups & Entrepreneurship',
		people: 'Richi Kleinlein, Kaushik Madapati, Dhanashree Nerkar, Mena Ramos',
	},
	{
		time: '10:15 – 10:45 AM',
		kind: 'break',
		title: 'Break',
	},
	{
		time: '10:45 – 11:45 AM',
		kind: 'workshop',
		title: 'Workshop 1 — Reimagining Startups & Entrepreneurship',
		description:
			'Case-based breakouts and a novel “Innovation Soul Report Card.” Founders diagnose misalignments in real companies and in their own ventures, then collectively propose concrete changes to an ecosystem where 90% of startups fail and most survivors never move the needle on health.',
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
		title: 'Whose values are getting funded?',
		people: 'Priyanka Boadagala, Monique de Villa, Joao Matos, Freddy Seba',
	},
	{
		time: '1:45 – 2:45 PM',
		kind: 'workshop',
		title:
			'Workshop 2 — The Moral Vulnerability Audit: Stress-Testing Startup Ideas for Unintended Harm',
		description:
			'Teams pitch under standard hackathon conditions, then face an adversarial audit that surfaces embedded biases, excluded communities, and unexamined assumptions. The contrast between first and revised pitch makes the case in real time: confronting moral blind spots produces stronger, more resilient companies.',
	},
	{
		time: '2:45 – 3:00 PM',
		kind: 'debrief',
		title: 'Workshop 2 Debrief',
	},
	{
		time: '3:00 – 3:30 PM',
		kind: 'break',
		title: 'Break',
	},
	{
		time: '3:30 – 4:45 PM',
		kind: 'keynote',
		title: 'Reverse Shark Tank — Grilling Investors on Their Values',
		description:
			'The power dynamic flips. Teams pitch, investors deliberate openly, then the moderator turns the room around and interrogates the investors on the values inside their decisions.',
	},
	{
		time: '4:45 – 5:00 PM',
		kind: 'wrap',
		title: 'Wrap & Next Steps',
	},
	{
		time: '5:00 – 6:00 PM',
		kind: 'networking',
		title: 'Networking',
	},
];

const KIND_META: Record<
	Block['kind'],
	{ label: string; Icon: typeof Mic; tint: string }
> = {
	opening: { label: 'Opening', Icon: Compass, tint: 'text-amber-300/80' },
	panel: { label: 'Panel', Icon: Mic, tint: 'text-amber-300/80' },
	workshop: { label: 'Workshop', Icon: Wrench, tint: 'text-amber-300/80' },
	debrief: { label: 'Debrief', Icon: Target, tint: 'text-white/40' },
	break: { label: 'Break', Icon: Coffee, tint: 'text-white/30' },
	lunch: { label: 'Lunch', Icon: Coffee, tint: 'text-white/30' },
	keynote: { label: 'Session', Icon: Lightbulb, tint: 'text-amber-300/90' },
	wrap: { label: 'Wrap', Icon: Compass, tint: 'text-white/40' },
	networking: { label: 'Networking', Icon: Users, tint: 'text-white/40' },
};

const w1Objectives = [
	'Identify at least three structural misalignments between venture-backed innovation and healthcare impact.',
	'Articulate how the funding model you choose shapes what your company can become.',
	'Draft an Innovation Soul Report Card for your own venture.',
	'Generate at least one concrete design change to the innovation ecosystem.',
];

const w1Flow: { time: string; title: string; format: string }[] = [
	{ time: '0:00–0:05', title: 'Welcome & Provocation', format: 'Plenary' },
	{ time: '0:05–0:12', title: 'The Diagnosis: How Did We Get Here?', format: 'Plenary + Chat' },
	{ time: '0:12–0:15', title: 'Case Setup: Two Companies, One Problem', format: 'Plenary' },
	{ time: '0:15–0:30', title: 'Breakout 1: The Misalignment Autopsy', format: 'Small groups (4–5)' },
	{ time: '0:30–0:35', title: 'Report-Back: Sharpest Insight', format: 'Plenary' },
	{ time: '0:35–0:38', title: 'Pivot: The Soul Report Card Concept', format: 'Plenary' },
	{ time: '0:38–0:50', title: 'Breakout 2: Score Your Own Company', format: 'Individual + Pairs' },
	{ time: '0:50–0:57', title: 'Collective Redesign: One Change to the Ecosystem', format: 'Plenary + Chat' },
	{ time: '0:57–1:00', title: 'Closing Commitment & Next Steps', format: 'Plenary' },
];

const w2Lenses: { name: string; question: string }[] = [
	{
		name: 'Data Provenance',
		question:
			'Where does the training or operational data come from? Who is represented and who is missing? What historical biases does it encode?',
	},
	{
		name: 'Harm Gradient',
		question:
			'If the product works perfectly, who benefits and who is left out? If it fails, who bears the cost?',
	},
	{
		name: 'Assumption Inventory',
		question:
			'What does the product assume about users — language, literacy, digital access, trust, cultural norms? Which assumptions are invisible to the founders?',
	},
	{
		name: 'Power Dynamics',
		question:
			'Does the product concentrate decision-making power or distribute it? Who has recourse when the system makes a mistake?',
	},
	{
		name: 'Second-Order Effects',
		question:
			'What happens at 10x or 100x scale? What happens when it reaches communities the founders never considered, or when a bad actor uses it?',
	},
];

const w1Diagnosis: {
	number: string;
	title: string;
	body?: string;
	bullets?: { label: string; text: string }[];
	Icon: typeof Mic;
}[] = [
	{
		number: '01',
		title: 'The VC Thesis vs. The Healthcare Problem',
		body:
			'Venture capital was designed for software: scale fast, fail fast, exit in 3–5 years, and count on 1 in 10 companies producing a 100x return. That math works for consumer apps. It does not work for healthcare, where the most impactful innovations require 10–20 year horizons, regulatory navigation, and evidence generation that cannot be sprint-ed.',
		Icon: TrendingUp,
	},
	{
		number: '02',
		title: 'The Three Misalignments',
		bullets: [
			{
				label: 'Innovation typology',
				text: 'We collapse drugs, software, care delivery, and community interventions into one pipeline designed for software.',
			},
			{
				label: 'Mathematical',
				text: 'A company improving outcomes at a steady pace is a “failure” by VC math even as it succeeds by every metric patients care about.',
			},
			{
				label: 'Values',
				text: 'The communities most burdened by health inequity are least served by the innovations that attract investment.',
			},
		],
		Icon: AlertTriangle,
	},
	{
		number: '03',
		title: 'The Private Equity Warning',
		body:
			'A systematic review in The BMJ of 55 studies across 8 countries found private equity ownership was associated with higher costs to patients and mixed-to-harmful impacts on quality. No study has found significant improvements. This is where “move fast and break things” leads when applied to systems that care for human beings.',
		Icon: Building2,
	},
	{
		number: '04',
		title: 'But Bright Spots Exist',
		body:
			'The ACA’s Medicare Shared Savings Program created financial architecture for value-based innovation. Companies like Aledade have recruited independent primary care providers into accountable care organizations rewarded for reducing total cost of care. The lesson: aligned innovation does not emerge from markets alone. It requires policy to create the conditions.',
		Icon: Sprout,
	},
];

const w1Cases: {
	tag: 'A' | 'B';
	tone: 'cautionary' | 'hopeful';
	name: string;
	headline: string;
	body: string;
}[] = [
	{
		tag: 'A',
		tone: 'cautionary',
		name: 'MedFlow AI',
		headline: '$12M Series A. 10x return expected in 4 years.',
		body:
			'MedFlow AI has raised $12M in Series A funding from a top-tier VC firm. They have built an AI-powered clinical documentation tool that reduces physician charting time by 40%. Their growth strategy is to expand from 50 to 500 hospital clients by next year. They are winning. Their pitch deck says they are “transforming healthcare.” But their tool records every clinical encounter, and their business model depends on that data becoming more valuable than the care itself. Physicians using the tool report they spend less time with patients because the system rewards throughput. The hospitals love it because it increases billing efficiency.',
	},
	{
		tag: 'B',
		tone: 'hopeful',
		name: 'Community Pulse',
		headline: '23% reduction in ED visits. Can’t raise a dime.',
		body:
			'Community Pulse is a 3-person team that has built a community health worker platform connecting patients with non-clinical resources: housing assistance, food security, translation services, transportation. They have run for 2 years on a $150K state grant and are showing a 23% reduction in ED visits among enrolled patients. They cannot raise VC funding because their model does not scale the way investors want. Their grant is expiring. Two of the three team members have taken second jobs to keep the company alive. They applied to three accelerators and were rejected because “the market isn’t big enough.”',
	},
];

const w1Breakout1Questions: string[] = [
	'Diagnose each company. Where are the misalignments — between what they’re building, how they’re funded, and what patients actually need?',
	'Which company is more likely to survive? Which is more likely to improve health? Why are those different questions?',
	'Is there a version of MedFlow AI that could be built ethically? Is there a funding model that could sustain Community Pulse?',
];

const w1ReportCard: { dim: string; question: string }[] = [
	{
		dim: 'Patient Outcome Impact',
		question:
			'Does this measurably improve health for patients, or does it optimize a process that may or may not help them?',
	},
	{
		dim: 'Equity Reach',
		question:
			'Does this serve the communities most burdened by health inequity, or does it reinforce existing disparities in access?',
	},
	{
		dim: 'Clinician Relationship',
		question:
			'Does this strengthen or erode the clinician–patient relationship? Does it create space for human judgment?',
	},
	{
		dim: 'Labor Impact',
		question:
			'Will this displace healthcare workers? If so, does it create alternative value for them, or simply extract their expertise?',
	},
	{
		dim: 'Community Voice',
		question:
			'Have the people who will be most affected by this innovation been involved in its design, testing, and governance?',
	},
	{
		dim: 'Data Reciprocity',
		question:
			'If your product generates or consumes patient data, do the people who produced that data benefit proportionally?',
	},
	{
		dim: 'Environmental Cost',
		question:
			'What is the environmental footprint of this innovation (compute, manufacturing, supply chain)?',
	},
	{
		dim: 'Funding–Mission Alignment',
		question:
			'Does your funding model allow you to pursue your mission, or does it require you to compromise it for returns?',
	},
];

const w1RedesignPrompts: string[] = [
	'What if healthcare companies were required to be at least 50% publicly funded?',
	'What if communities, not VCs, decided which innovations got funded?',
	'What if your Soul Report Card was public, like a Yelp rating for health startups?',
	'What if accelerators required that patients sit on the evaluation panel?',
	'What if founders were encouraged to merge with complementary startups rather than compete?',
];

const w1Provocations: string[] = [
	'Your investors need a 100x return in 4 years. Your patients need sustained improvement over 20 years. How do you reconcile that?',
	'Who is harmed if your company succeeds exactly as planned?',
	'If your company disappeared tomorrow, would any patient’s life get worse?',
	'What would your company look like if it were funded by the community it serves?',
	'Is the problem you’re solving a symptom or a root cause? Are you okay with that answer?',
];

const w2Flow: { time: string; title: string; description: string }[] = [
	{
		time: '0–5 min',
		title: 'Framing',
		description:
			'Mentor introduces moral vulnerability with a concrete example (e.g., Epic’s sepsis model) and the question: what if we caught these things before launch?',
	},
	{
		time: '5–20 min',
		title: 'Ideation',
		description:
			'Teams form and develop a startup concept on a one-page sketch: problem, solution, data sources, target users, revenue model. LLMs welcome.',
	},
	{
		time: '20–30 min',
		title: 'First Pitch',
		description: 'Each team presents for 2 minutes. The room listens and takes notes. No feedback yet.',
	},
	{
		time: '30–50 min',
		title: 'The Audit',
		description:
			'Teams rotate to audit another team using the five-lens framework. Surface embedded biases, excluded communities, and unexamined assumptions.',
	},
	{
		time: '50–60 min',
		title: 'Revision',
		description:
			'Teams revise the pitch — not as a buried risk section, but as a core part of the value proposition.',
	},
	{
		time: '60–70 min',
		title: 'Re-Pitch',
		description:
			'Each team presents the revised version. The room observes what changed. Almost always, the revised pitch is stronger.',
	},
	{
		time: '70–75 min',
		title: 'Reflection',
		description: 'What did we learn about our own blind spots? Audit frameworks are collected for post-event compilation.',
	},
];

const w3Flow: { time: string; title: string; description: string }[] = [
	{
		time: '0–10 min',
		title: 'Context-setting',
		description:
			'A short, slide-free storytelling segment: 2–3 real venture-backed companies that failed or caused documented harm. The opening question: what went wrong, and could a different set of investor values have changed the outcome?',
	},
	{
		time: '10–30 min',
		title: 'Small-group ideation',
		description:
			'Groups of 4–6 brainstorm a startup idea that addresses a real health or social equity gap. Each group must articulate the problem, who it serves, how it generates value (not just revenue), and what could go wrong. LLMs welcome as brainstorming partners.',
	},
	{
		time: '30–45 min',
		title: 'Pitch + open deliberation',
		description:
			'Each group delivers a 2-minute pitch to the investor panel. Investors deliberate out loud — replicating the real decision process in front of the room — about which ideas they would fund and why.',
	},
	{
		time: '45–65 min',
		title: 'The flip — moderator interrogates the panel',
		description:
			'A moderator from outside the investment world turns the room around: why those choices? Which criteria dominated? What was dismissed and why? Audience members raise questions; the moderator holds the line between honest interrogation and respectful dialogue.',
	},
	{
		time: '65–75 min',
		title: 'Collective debrief',
		description:
			'What surprised us? What values were missing from the calculus? What would a “values-first term sheet” look like? Each table writes one alternative evaluation criterion on a card; cards are collected and shared.',
	},
];

export default function Day1Page() {
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
				<WorkshopOne />
				<WorkshopTwo />
				<ReverseShark />
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

			{/* Radial glows */}
			<div className="absolute -top-1/4 -right-1/4 h-[80vh] w-[80vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.15)_0%,_transparent_60%)] pointer-events-none" />
			<div className="absolute -bottom-1/4 -left-1/4 h-[70vh] w-[70vh] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.12)_0%,_transparent_60%)] pointer-events-none" />

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />

			<div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pb-32">
				<Link
					href="/events/san-francisco-2026"
					className="inline-flex items-center gap-2 text-base text-white/50 hover:text-amber-400 transition-colors mb-12 group"
				>
					<ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
					Back to event page
				</Link>

				{/* Kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Day 01 &middot; Friday, May 1, 2026
					</span>
				</div>

				{/* Editorial headline */}
				<h1 className="font-bold tracking-tighter leading-[0.85]">
					<span className="block text-[16vw] sm:text-7xl lg:text-[8.5rem] bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent">
						Rebuild the
					</span>
					<span className="block text-[16vw] sm:text-7xl lg:text-[8.5rem] italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent pl-[6%] lg:pl-[10%] pr-4">
						Blueprint.
					</span>
				</h1>

				<div className="mt-10 lg:mt-14 max-w-2xl lg:pl-[10%]">
					<p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 tracking-tight leading-snug">
						Innovation & Entrepreneurship
					</p>
					<p className="mt-5 text-base sm:text-lg text-white/55 italic leading-relaxed max-w-xl">
						Investors, founders, researchers, clinicians, and community leaders, in the same room in
						downtown Palo Alto.
					</p>
				</div>

				{/* Info bar */}
				<div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 lg:pl-[10%]">
					<div className="flex items-center gap-3">
						<span className="inline-flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
						<span className="text-base text-white/80 font-semibold tracking-wide">9:00 AM – 6:00 PM</span>
					</div>
					<span className="hidden sm:inline h-4 w-px bg-white/20" />
					<span className="text-base text-white/80 font-semibold tracking-wide">
						Threshold Ventures, Palo Alto
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
							className="inline-flex items-center gap-2 text-base font-semibold text-amber-300 hover:text-amber-200 transition-colors group"
						>
							See the full programme
							<ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
						</Link>
						<span className="hidden sm:inline h-4 w-px bg-white/15" />
						<Link
							href="#workshop-1"
							className="inline-flex items-center gap-2 text-base text-white/65 hover:text-amber-400 transition-colors"
						>
							Workshop 1
						</Link>
						<span className="hidden sm:inline h-4 w-px bg-white/15" />
						<Link
							href="#workshop-2"
							className="inline-flex items-center gap-2 text-base text-white/65 hover:text-amber-400 transition-colors"
						>
							Workshop 2
						</Link>
						<span className="hidden sm:inline h-4 w-px bg-white/15" />
						<Link
							href="#reverse-shark-tank"
							className="inline-flex items-center gap-2 text-base text-white/65 hover:text-amber-400 transition-colors"
						>
							Reverse Shark Tank
						</Link>
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
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 10 L40 15 L35 20 L40 25 L35 30 L30 35 L25 30 L20 25 L25 20 L20 15 L25 10 Z' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px',
				}}
			/>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						The Day
					</span>
				</div>

				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl">
					The venture-backed innovation ecosystem is structurally misaligned with the goal of
					improving patient outcomes.{' '}
					<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
						Day 1 is where we redesign it.
					</span>
				</h2>

				<div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-14">
					<div className="lg:col-span-7">
						<p className="text-xl sm:text-2xl font-medium text-white/85 leading-snug tracking-tight">
							Teams will prototype new funding models, pressure-test ideas with investors live in
							the room, and walk out with a blueprint for building better companies.
						</p>
					</div>
					<div className="lg:col-span-5">
						<div className="h-px w-16 bg-gradient-to-r from-amber-500/60 to-transparent mb-6" />
						<p className="text-lg text-white/65 leading-relaxed font-light">
							Two panels. Two workshops. A Reverse Shark Tank that flips the script. Designed for
							founders, investors, clinicians, and community leaders — and the conversations
							that only happen when all four are in the same room.
						</p>
					</div>
				</div>

				{/* Stats */}
				<div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
					{[
						{ value: '2', label: 'Panels' },
						{ value: '2', label: 'Workshops' },
						{ value: '1', label: 'Reverse Shark Tank' },
						{ value: '9 hrs', label: 'Total programme' },
					].map((s) => (
						<div
							key={s.label}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-5 py-6 hover:border-amber-500/30 hover:from-amber-500/[0.06] transition-all"
						>
							<div className="text-4xl sm:text-5xl font-bold tracking-tighter bg-gradient-to-br from-amber-300 to-amber-500/60 bg-clip-text text-transparent">
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
					<div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.05] to-amber-500/[0.01] backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden">
						<div className="absolute -top-20 -right-20 h-48 w-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
						<div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
							<MapPin className="h-8 w-8 text-amber-300 flex-shrink-0 mt-1" />
							<div>
								<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-2">
									In Person
								</div>
								<div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
									Threshold Ventures
								</div>
								<div className="mt-2 text-base sm:text-lg text-white/65">
									630 Ramona St, Palo Alto, CA 94301
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
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Programme
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl">
					Friday,{' '}
					<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
						hour by hour.
					</span>
				</h2>

				<div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 sm:p-10">
					<ol className="relative">
						{/* Timeline rail */}
						<div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/30 via-white/10 to-white/5" />

						{programme.map((b, i) => {
							const meta = KIND_META[b.kind];
							const Icon = meta.Icon;
							const accent =
								b.kind === 'workshop' || b.kind === 'keynote' || b.kind === 'panel';
							return (
								<li
									key={b.time + b.title}
									className="relative flex gap-5 sm:gap-7 pb-7 last:pb-0"
								>
									{/* Dot */}
									<div className="relative flex-shrink-0 pt-2">
										<div
											className={`relative h-[15px] w-[15px] rounded-full ring-4 ring-black/60 ${
												accent ? 'bg-amber-400' : 'bg-white/30'
											}`}
										>
											{accent && (
												<div className="absolute inset-0 rounded-full bg-amber-400 opacity-40 animate-pulse" />
											)}
										</div>
									</div>

									<div className="flex-1 min-w-0">
										<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
											<span className="font-mono text-sm sm:text-base font-semibold tabular-nums text-white/80 tracking-tight">
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

/* ────────────────────────── WORKSHOP 1 ────────────────────────── */
function WorkshopOne() {
	return (
		<section id="workshop-1" className="relative bg-black/60 py-28 sm:py-36 overflow-hidden">
			<div className="absolute -top-1/4 -right-1/4 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.1)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* ── Header ── */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Workshop 01 &middot; 10:45 AM – 12:00 PM
					</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-7">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
							Reimagining Healthcare Innovation:{' '}
							<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
								Beyond the 90% Failure Rate.
							</span>
						</h2>
						<p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
							This workshop is for startup founders and aspiring entrepreneurs in healthcare.
							Rather than teaching innovation, it creates the conditions to interrogate the
							ecosystem you are entering — and to imagine what that ecosystem might look like if it
							were designed to actually improve health rather than merely generate returns.
						</p>

						<div className="mt-10">
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-4">
								Learning Objectives
							</div>
							<ul className="space-y-4">
								{w1Objectives.map((o) => (
									<li
										key={o}
										className="flex gap-3 text-white/80 text-base sm:text-lg leading-relaxed"
									>
										<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
										<span>{o}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Facilitator card */}
					<div className="lg:col-span-5">
						<div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] to-amber-500/[0.01] backdrop-blur-xl p-8 relative overflow-hidden h-full">
							<div className="absolute -top-20 -right-20 h-48 w-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
							<div className="relative">
								<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-3">
									Facilitator
								</div>
								<div className="text-2xl font-bold text-white tracking-tight leading-tight">
									Leo Anthony Celi, MD, MS, MPH
								</div>
								<div className="mt-2 text-base text-white/65">MIT &middot; Harvard Medical School</div>

								<div className="mt-8 pt-6 border-t border-white/10">
									<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-3">
										Format
									</div>
									<div className="space-y-2 text-base text-white/75">
										<div>Plenary + small-group breakouts (4–5 per group)</div>
										<div>Shared Soul Report Card template</div>
										<div>1 mentor per breakout room</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── Provocation / opening quote ── */}
				<div className="mt-16 relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.05] via-red-500/[0.03] to-transparent p-8 sm:p-10 overflow-hidden">
					<div className="absolute -top-16 -left-16 h-40 w-40 bg-amber-500/15 blur-3xl rounded-full pointer-events-none" />
					<Quote className="h-8 w-8 text-amber-400/70 mb-4" />
					<p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 leading-snug tracking-tight max-w-4xl">
						“Ninety percent of startups fail. In health tech, it’s closer to eighty percent. And
						here’s the part nobody says out loud: most of the ones that survive didn’t actually
						change healthcare. The system absorbed them and stayed exactly the same.”
					</p>
					<p className="mt-5 text-sm uppercase tracking-[0.25em] text-amber-300/70 font-semibold">
						Opening provocation
					</p>
				</div>

				{/* ── Workshop flow at a glance ── */}
				<div className="mt-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-amber-300/80">
							Workshop Flow
						</div>
						<div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
						<span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30">
							9 segments &middot; 60 min
						</span>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{w1Flow.map((row, i) => (
							<div
								key={row.time}
								className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-amber-500/30 hover:from-amber-500/[0.05] transition-all"
							>
								<div className="flex items-baseline justify-between mb-3">
									<span className="font-mono text-sm font-bold tabular-nums text-amber-300">
										{row.time}
									</span>
									<span className="font-mono text-xs text-white/30 tabular-nums">
										{String(i + 1).padStart(2, '0')}
									</span>
								</div>
								<div className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
									{row.title}
								</div>
								<div className="mt-3 text-xs uppercase tracking-[0.15em] text-white/55 font-semibold">
									{row.format}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* ── Section divider: The Diagnosis ── */}
				<SectionMarker chapter="Part 01" title="The Diagnosis: How did we get here?" />

				<p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
					Before we redesign anything, we need a shared picture of why the current ecosystem produces
					the outcomes it does. Four ideas frame the conversation:
				</p>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
					{w1Diagnosis.map((d) => {
						const DIcon = d.Icon;
						return (
							<div
								key={d.number}
								className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-xl p-7 hover:border-amber-500/30 hover:from-amber-500/[0.05] transition-all"
							>
								<div className="flex items-start justify-between mb-4">
									<DIcon className="h-6 w-6 text-amber-300/80" />
									<span className="font-mono text-[0.7rem] tabular-nums text-white/30 mt-1">
										{d.number}
									</span>
								</div>
								<div className="text-lg font-bold text-white tracking-tight leading-snug mb-3">
									{d.title}
								</div>
								{d.body && (
									<p className="text-base text-white/70 leading-relaxed">{d.body}</p>
								)}
								{d.bullets && (
									<ul className="space-y-3">
										{d.bullets.map((b) => (
											<li key={b.label} className="flex gap-3 text-base text-white/70 leading-relaxed">
												<span className="flex-shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
												<span>
													<span className="font-semibold text-white">{b.label}:</span>{' '}
													{b.text}
												</span>
											</li>
										))}
									</ul>
								)}
							</div>
						);
					})}
				</div>

				{/* ── Section divider: The Two Cases ── */}
				<SectionMarker chapter="Part 02" title="The two cases. Read them. Sit with the discomfort." />

				<p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
					Two real composites — not exactly real, not exactly fictional. You will work with these in
					Breakout 1.
				</p>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
					{w1Cases.map((c) => {
						const cautionary = c.tone === 'cautionary';
						return (
							<div
								key={c.tag}
								className={`relative rounded-3xl border ${
									cautionary
										? 'border-red-500/25 bg-gradient-to-br from-red-500/[0.06] to-red-500/[0.01]'
										: 'border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.05] to-emerald-500/[0.01]'
								} backdrop-blur-xl p-8 sm:p-10 overflow-hidden`}
							>
								<div
									className={`absolute -top-20 -right-20 h-48 w-48 ${
										cautionary ? 'bg-red-500/15' : 'bg-emerald-500/15'
									} blur-3xl rounded-full pointer-events-none`}
								/>
								<div className="relative">
									<div className="flex items-center justify-between mb-5">
										<div
											className={`text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold ${
												cautionary ? 'text-red-300/85' : 'text-emerald-300/85'
											}`}
										>
											Case {c.tag}
										</div>
										<span
											className={`inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.2em] font-bold ${
												cautionary ? 'text-red-300/70' : 'text-emerald-300/70'
											}`}
										>
											<span
												className={`h-1.5 w-1.5 rounded-full ${
													cautionary ? 'bg-red-400' : 'bg-emerald-400'
												}`}
											/>
											{cautionary ? 'Cautionary' : 'Hopeful'}
										</span>
									</div>
									<div className="text-3xl sm:text-4xl font-bold text-white tracking-tighter leading-tight">
										{c.name}
									</div>
									<p className="mt-3 text-base font-medium text-white/75 italic leading-snug">
										{c.headline}
									</p>
									<div className="mt-6 h-px w-12 bg-white/15" />
									<p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
										{c.body}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* ── Section divider: Breakout 1 ── */}
				<SectionMarker chapter="Part 03" title="Breakout 1 — The Misalignment Autopsy" duration="15 min" />

				<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-8 sm:p-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
						<div className="lg:col-span-4">
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-3">
								What you’ll do
							</div>
							<p className="text-base text-white/70 leading-relaxed">
								Groups of 4–5. Designate a spokesperson before you begin — they will share your
								group’s sharpest single insight in 60 seconds when we reconvene.
							</p>
						</div>
						<div className="lg:col-span-8">
							<ol className="space-y-5">
								{w1Breakout1Questions.map((q, i) => (
									<li
										key={q}
										className="relative pl-12 text-base sm:text-lg text-white/85 leading-snug font-medium tracking-tight"
									>
										<span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 font-mono text-xs font-bold text-amber-300 tabular-nums">
											{i + 1}
										</span>
										{q}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>

				{/* ── Section divider: The Soul Report Card ── */}
				<SectionMarker chapter="Part 04" title="The Innovation Soul Report Card" />

				<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/[0.04] via-red-500/[0.02] to-transparent backdrop-blur-xl p-8 sm:p-10">
					<p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
						When you go to a restaurant, you can see a health inspection grade. When you buy food,
						there is a nutritional label. When a hospital wants accreditation, there is the Joint
						Commission. But when a company builds a product that will be used on patients — nothing.
						No label. No grade. No community voice.
					</p>
					<p className="mt-4 text-lg text-white/70 leading-relaxed max-w-3xl">
						The Soul Report Card is a community-governed assessment where patients, frontline
						clinicians, and community health workers evaluate innovations on the dimensions that
						matter to them. Today you will score your own company.
					</p>

					<div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
						{/* Header row */}
						<div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.02] text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-amber-300/70">
							<div className="col-span-3">Dimension</div>
							<div className="col-span-7">Guiding question</div>
							<div className="col-span-2 text-right">Score</div>
						</div>
						{w1ReportCard.map((row, i) => (
							<div
								key={row.dim}
								className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-5 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
							>
								<div className="sm:col-span-3 flex items-start gap-3">
									<span className="font-mono text-xs text-white/35 tabular-nums mt-1">
										{String(i + 1).padStart(2, '0')}
									</span>
									<span className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
										{row.dim}
									</span>
								</div>
								<div className="sm:col-span-7 text-base text-white/65 leading-relaxed">
									{row.question}
								</div>
								<div className="sm:col-span-2 sm:text-right">
									<span className="inline-flex items-center justify-center rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 font-mono text-sm font-bold text-amber-300 tabular-nums">
										___ / 5
									</span>
								</div>
							</div>
						))}
					</div>

					<p className="mt-6 text-base text-white/65 leading-relaxed max-w-3xl">
						Score yourself 1–5 on each dimension (1 = serious concern, 5 = strong alignment). Score
						honestly — if you give yourself all 5s, you are not being honest.
					</p>
				</div>

				{/* ── Breakout 2 instructions ── */}
				<SectionMarker chapter="Part 05" title="Breakout 2 — Score your own company" duration="12 min" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-7">
						<div className="flex items-center gap-3 mb-4">
							<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-300 font-mono text-xs font-bold">
								01
							</span>
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-amber-300/80">
								Individual &middot; 5 min
							</div>
						</div>
						<p className="text-base text-white/75 leading-relaxed">
							Score yourself honestly across the eight dimensions. Nobody sees this but you and
							your partner. If you give yourself all 5s, you are not being honest.
						</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-7">
						<div className="flex items-center gap-3 mb-4">
							<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-300 font-mono text-xs font-bold">
								02
							</span>
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-amber-300/80">
								Paired discussion &middot; 7 min
							</div>
						</div>
						<p className="text-base text-white/75 leading-relaxed">
							Share your scores with one partner. Where did you score lowest? Is that a fixable
							problem or a structural one? What would it take to move that score up by one point?
						</p>
					</div>
				</div>

				{/* ── Collective redesign ── */}
				<SectionMarker chapter="Part 06" title="Collective redesign" duration="7 min" />

				<p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
					We have diagnosed the ecosystem. You have scored yourselves within it. Now flip the
					question: if you could change <span className="text-white">one thing</span> about the
					innovation ecosystem — not your company, the ecosystem itself — what would it be?
				</p>

				<div className="mt-8 text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-4">
					Seed prompts (if energy is low)
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{w1RedesignPrompts.map((p, i) => (
						<div
							key={p}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-5 flex gap-4 hover:border-amber-500/30 hover:from-amber-500/[0.05] transition-all"
						>
							<span className="font-mono text-[0.7rem] text-amber-300/60 tabular-nums pt-0.5">
								{String(i + 1).padStart(2, '0')}
							</span>
							<p className="text-base sm:text-lg text-white/80 leading-snug italic">{p}</p>
						</div>
					))}
				</div>

				{/* ── Closing commitment ── */}
				<SectionMarker chapter="Part 07" title="Before you leave: two commitments" duration="3 min" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.06] to-amber-500/[0.01] p-8 relative overflow-hidden">
						<div className="absolute -top-16 -right-16 h-32 w-32 bg-amber-500/15 blur-3xl rounded-full" />
						<div className="relative">
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-3">
								01 &middot; Yourself
							</div>
							<p className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
								One thing you will do differently with your company after today.
							</p>
							<p className="mt-3 text-base text-white/70 leading-relaxed">
								Not aspirational — concrete. Something you can do this week.
							</p>
						</div>
					</div>
					<div className="rounded-3xl border border-red-500/25 bg-gradient-to-br from-red-500/[0.05] to-red-500/[0.01] p-8 relative overflow-hidden">
						<div className="absolute -top-16 -right-16 h-32 w-32 bg-red-500/15 blur-3xl rounded-full" />
						<div className="relative">
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-red-300/80 font-bold mb-3">
								02 &middot; The ecosystem
							</div>
							<p className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
								One thing you want the ecosystem to do differently.
							</p>
							<p className="mt-3 text-base text-white/70 leading-relaxed">
								A policy change, a cultural shift, a new institution — anything.
							</p>
						</div>
					</div>
				</div>

				{/* ── Provocations to keep in your pocket ── */}
				<div className="mt-20 pt-12 border-t border-white/10">
					<div className="flex items-center gap-3 mb-6">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-amber-300/80">
							Provocations to keep in your pocket
						</div>
						<div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
					</div>
					<p className="text-lg text-white/65 leading-relaxed max-w-3xl mb-8">
						If a discussion stalls, return to one of these. They are designed to introduce
						productive discomfort, not to be answered cleanly.
					</p>
					<ul className="space-y-3">
						{w1Provocations.map((p) => (
							<li
								key={p}
								className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
							>
								<Quote className="h-5 w-5 text-amber-400/60 flex-shrink-0 mt-0.5" />
								<p className="text-base sm:text-lg text-white/80 leading-relaxed italic">
									{p}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

/* Reusable inline part-marker for Workshop 1 */
function SectionMarker({
	chapter,
	title,
	duration,
}: {
	chapter: string;
	title: string;
	duration?: string;
}) {
	return (
		<div className="mt-20 mb-8">
			<div className="flex flex-wrap items-center gap-3 mb-4">
				<div className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-amber-300/90">
					{chapter}
				</div>
				<div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent min-w-[2rem]" />
				{duration && (
					<span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 font-mono text-sm font-bold tabular-nums text-amber-200">
						<span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
						{duration}
					</span>
				)}
			</div>
			<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight max-w-4xl">
				{title}
			</h3>
		</div>
	);
}

/* ────────────────────────── WORKSHOP 2 ────────────────────────── */
function WorkshopTwo() {
	return (
		<section id="workshop-2" className="relative bg-black/60 py-28 sm:py-36 overflow-hidden">
			<div className="absolute -bottom-1/4 -left-1/4 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.12)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Workshop 02 &middot; 1:45 PM
					</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-7">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
							The Moral Vulnerability Audit:{' '}
							<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
								Stress-testing startup ideas for unintended harm.
							</span>
						</h2>
						<p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
							At hackathons and pitch competitions, founders present the best possible abstraction
							of their idea. Showing vulnerability is treated as a mortal sin. This workshop inverts
							that norm. Teams develop a startup concept, pitch it once, and then the room conducts
							a moral vulnerability audit — surfacing the ways the product could embed bias,
							concentrate harm on marginalized communities, or produce unintended consequences that
							a market-capture lens would never reveal.
						</p>

						<div className="mt-10">
							<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-4">
								Objectives
							</div>
							<ul className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
								<li className="flex gap-3">
									<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
									<span>
										Normalize the practice of exposing moral and social vulnerabilities in
										startup design, rather than hiding them.
									</span>
								</li>
								<li className="flex gap-3">
									<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
									<span>
										Give participants hands-on experience identifying embedded biases in data
										pipelines, product assumptions, user personas, and business models.
									</span>
								</li>
								<li className="flex gap-3">
									<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
									<span>
										Show that accounting for equity and bias produces more resilient, more
										defensible, and ultimately more scalable companies.
									</span>
								</li>
								<li className="flex gap-3">
									<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
									<span>
										Produce a reusable Moral Vulnerability Audit checklist participants can apply
										to any future venture.
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Setup card */}
					<div className="lg:col-span-5">
						<div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/[0.06] to-red-500/[0.01] backdrop-blur-xl p-8 relative overflow-hidden h-full">
							<div className="absolute -top-20 -right-20 h-48 w-48 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
							<div className="relative">
								<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-3">
									Format
								</div>
								<div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
									Ideation → first pitch → adversarial audit → revision →
									re-pitch → reflection
								</div>

								<div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-5">
									<div>
										<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold mb-2">
											Duration
										</div>
										<div className="text-lg font-bold text-white">75 minutes</div>
									</div>
									<div>
										<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold mb-2">
											Group size
										</div>
										<div className="text-lg font-bold text-white">
											20–35 in teams of 4–6
										</div>
									</div>
								</div>

								<div className="mt-6 pt-6 border-t border-white/10">
									<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold mb-2">
										Setting
									</div>
									<div className="text-base text-white/75">
										Breakout rooms and hot-desk clusters at Threshold Ventures
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Five lenses */}
				<div className="mt-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-amber-300/80 inline-flex items-center gap-2">
							<ShieldAlert className="h-3.5 w-3.5" />
							The Audit Framework
						</div>
						<div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
						<span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30">
							5 lenses
						</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{w2Lenses.map((lens, i) => (
							<div
								key={lens.name}
								className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-red-500/30 hover:from-red-500/[0.04] transition-all"
							>
								<div className="flex items-baseline justify-between mb-3">
									<div className="text-base font-bold text-white tracking-tight">
										{lens.name}
									</div>
									<span className="font-mono text-[0.65rem] text-white/25 tabular-nums">
										{String(i + 1).padStart(2, '0')}
									</span>
								</div>
								<p className="text-base text-white/70 leading-relaxed">{lens.question}</p>
							</div>
						))}
					</div>
				</div>

				{/* Flow */}
				<div className="mt-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-amber-300/80">
							Session Flow
						</div>
						<div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
						<span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30">
							75 min
						</span>
					</div>

					<ol className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-10">
						<div className="absolute left-[1.7rem] sm:left-[2.7rem] top-10 bottom-10 w-px bg-gradient-to-b from-amber-500/30 via-white/10 to-white/5" />
						{w2Flow.map((row, i) => (
							<li key={row.time} className="relative flex gap-5 sm:gap-7 pb-7 last:pb-0">
								<div className="relative flex-shrink-0 pt-2">
									<div className="relative h-[15px] w-[15px] rounded-full bg-amber-400 ring-4 ring-black/60">
										<div className="absolute inset-0 rounded-full bg-amber-400 opacity-40 animate-pulse" />
									</div>
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
										<span className="font-mono text-sm sm:text-base font-bold tabular-nums text-amber-300">
											{row.time}
										</span>
										<span className="font-mono text-[0.6rem] text-white/25 tabular-nums">
											{String(i + 1).padStart(2, '0')}
										</span>
									</div>
									<p className="text-base sm:text-lg leading-snug font-semibold text-white tracking-tight">
										{row.title}
									</p>
									<p className="mt-2 text-base text-white/65 leading-relaxed max-w-2xl">
										{row.description}
									</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────── REVERSE SHARK TANK ────────────────────────── */
function ReverseShark() {
	return (
		<section id="reverse-shark-tank" className="relative bg-black/60 py-28 sm:py-36 overflow-hidden">
			<div className="absolute -top-1/4 -right-1/4 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.1)_0%,_transparent_60%)] pointer-events-none" />
			<div className="absolute -bottom-1/4 -left-1/4 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.1)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Closing Session &middot; 3:30 PM – 4:45 PM
					</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-7">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05]">
							The Reverse Shark Tank:{' '}
							<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
								Grilling investors on their values.
							</span>
						</h2>
						<p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
							In a conventional Shark Tank, founders beg investors for money. Here we flip the
							power dynamic. Investors must justify their decision-making — their criteria, their
							blind spots, their value systems — to a room that includes students, community
							members, indigenous knowledge holders, and early-stage founders from backgrounds
							underrepresented in Silicon Valley deal rooms.
						</p>
						<p className="mt-4 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl">
							The goal is not to vilify investors. It is to make visible the assumptions that
							usually stay behind closed doors, and to open a genuine conversation about what
							“success” should mean.
						</p>
					</div>

					{/* Setup card */}
					<div className="lg:col-span-5">
						<div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] to-amber-500/[0.01] backdrop-blur-xl p-8 relative overflow-hidden h-full">
							<div className="absolute -top-20 -right-20 h-48 w-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
							<div className="relative">
								<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-3">
									Format
								</div>
								<div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
									Small-group ideation → live pitch → moderated investor interrogation →
									collective debrief
								</div>

								<div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-5">
									<div>
										<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold mb-2">
											Duration
										</div>
										<div className="text-lg font-bold text-white">75 minutes</div>
									</div>
									<div>
										<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold mb-2">
											Group size
										</div>
										<div className="text-lg font-bold text-white">
											20–35 + 2–3 panelists
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* What you'll do */}
				<div className="mt-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-amber-300/80">
							What You’ll Do
						</div>
						<div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
						<span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30">
							5 phases &middot; 75 min
						</span>
					</div>

					<ol className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-10">
						<div className="absolute left-[1.7rem] sm:left-[2.7rem] top-10 bottom-10 w-px bg-gradient-to-b from-amber-500/30 via-white/10 to-white/5" />
						{w3Flow.map((row, i) => (
							<li key={row.time} className="relative flex gap-5 sm:gap-7 pb-7 last:pb-0">
								<div className="relative flex-shrink-0 pt-2">
									<div className="relative h-[15px] w-[15px] rounded-full bg-amber-400 ring-4 ring-black/60">
										<div className="absolute inset-0 rounded-full bg-amber-400 opacity-40 animate-pulse" />
									</div>
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
										<span className="font-mono text-sm sm:text-base font-bold tabular-nums text-amber-300">
											{row.time}
										</span>
										<span className="font-mono text-[0.6rem] text-white/25 tabular-nums">
											{String(i + 1).padStart(2, '0')}
										</span>
									</div>
									<p className="text-lg sm:text-xl leading-snug font-semibold text-white tracking-tight">
										{row.title}
									</p>
									<p className="mt-2 text-base text-white/65 leading-relaxed max-w-3xl">
										{row.description}
									</p>
								</div>
							</li>
						))}
					</ol>
				</div>

				{/* Norms */}
				<div className="mt-16 rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.05] via-red-500/[0.03] to-transparent p-8 sm:p-10 relative overflow-hidden">
					<div className="absolute -top-16 -left-16 h-40 w-40 bg-amber-500/15 blur-3xl rounded-full pointer-events-none" />
					<div className="relative">
						<div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300/80 font-bold mb-4">
							A few norms for the room
						</div>
						<ul className="space-y-3 text-base sm:text-lg text-white/80 leading-relaxed">
							<li className="flex gap-3">
								<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
								<span>
									Curiosity, not prosecution. Most investors operate inside a system whose
									incentives they did not design. The point is to make that system visible —
									not attack the people inside it.
								</span>
							</li>
							<li className="flex gap-3">
								<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
								<span>
									Voices that are usually last get to go first. Students from MSIs, community
									members, and people from non-finance backgrounds are invited to ask before
									anyone else.
								</span>
							</li>
							<li className="flex gap-3">
								<span className="flex-shrink-0 mt-2.5 h-2 w-2 rounded-full bg-amber-400" />
								<span>
									Cards in, criteria out. Every table writes one alternative evaluation
									criterion on a card during the debrief — these are collected and shared
									publicly after the event as a provocation document.
								</span>
							</li>
						</ul>
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
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[80vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.1)_0%,_transparent_55%)] pointer-events-none" />

			<div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
				<div className="inline-flex items-center gap-4 mb-10">
					<div className="h-px w-12 bg-amber-500/60" />
					<span className="text-[0.7rem] uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						See you Friday
					</span>
					<div className="h-px w-12 bg-amber-500/60" />
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
					Come ready to{' '}
					<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
						rebuild the blueprint.
					</span>
				</h2>
				<p className="text-base sm:text-lg text-white/55 mb-10 leading-relaxed">
					May 1, 2026 &middot; 9:00 AM at Threshold Ventures, 630 Ramona St, Palo Alto.
				</p>

				<Link
					href="/events/san-francisco-2026"
					className="inline-flex items-center gap-2 text-base text-white/60 hover:text-amber-400 transition-colors group"
				>
					<ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
					Back to event page
				</Link>
			</div>
		</section>
	);
}
