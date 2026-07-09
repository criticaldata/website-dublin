import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
	Activity,
	Anchor,
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	BookMarked,
	BookOpen,
	Briefcase,
	Compass,
	Globe2,
	GraduationCap,
	HandHeart,
	HeartHandshake,
	Network,
	Sprout,
	Users,
} from 'lucide-react';
import RomePhysicsLayer from './RomePhysicsLayer';

export const metadata: Metadata = {
	title: 'AI as a Catalyst - Roma | MIT Critical Data',
	description:
		'Centering immigrant communities in the AI revolution. A community-led gathering in Rome from September 4-5, 2026 co-organized with the Philippine Embassy, alongside second-generation Filipinos in Italy, schools, and MIT Critical Data.',
	openGraph: {
		title: 'AI as a Catalyst - Roma',
		description:
			'Centering immigrant communities in the AI revolution. Community-led, ground-up, embedded.',
		type: 'website',
	},
};

const audience = [
	{
		Icon: Users,
		title: 'Second-generation Filipino youth',
		body: 'Young people raised in Italy, fluent in two cultures, navigating an AI-shaped future their parents did not. Their friends are part of the room too.',
	},
	{
		Icon: GraduationCap,
		title: 'Filipinos working in schools',
		body: 'Teachers, staff, and support workers who already hold the trust of students and families, and can translate AI literacy into daily practice.',
	},
	{
		Icon: Sprout,
		title: 'Vocational and working schools',
		body: 'Programs serving immigrant and working-class students, ready to fold AI literacy into curricula that prepare people for real jobs and lives.',
	},
];

const programme = [
	{
		Icon: BookOpen,
		number: '01',
		title: 'LLM-athon',
		tagline: 'Test the oracle in the languages it claims to serve.',
		body: 'Small teams probe two or three large language models with the same question in different languages — Italian, Tagalog, English — and compare the answers. They sound fluent. That is not the same as being right. Expose how language and culture shape what AI is willing to say.',
	},
	{
		Icon: BookMarked,
		number: '02',
		title: 'HASTC — Haze',
		tagline: 'Dream the worst-case. Then build the guardrails.',
		body: 'Health AI Systems Thinking for Community. A journal-club format: recent AI papers, distributed beforehand via short podcasts you actually have time to listen to. In the room, we go straight to the worst-case scenarios — and the guardrails (community, institutional, technical) that would keep them from happening.',
	},
	{
		Icon: HandHeart,
		number: '03',
		title: 'AI as a Catalyst',
		tagline: 'Heartstorming. Soulstorming.',
		body: 'Drawing, sound, and shared sensory exercises that have nothing to do with code and everything to do with how a room of humans pays attention together. Because machines can sound fluent. They cannot feel. They cannot experience. They will not contextualize the way humans can.',
	},
	{
		Icon: Briefcase,
		number: '04',
		title: 'Re-imagining Human-AI Touchpoints',
		tagline: 'Increase quality. Not quantity.',
		body: 'When AI replaced human customer support, calls went up and satisfaction went down. The same thing will happen in healthcare if we let it. We re-imagine human-AI systems that lengthen and deepen the contact between caregivers and patients — instead of automating it away.',
	},
];

const planners = [
	{ name: 'Leo Anthony Celi', affiliation: 'MIT Critical Data', city: 'Boston' },
	{ name: 'Gregory Ramon Dacer Gaston', affiliation: 'Collegio Filippino — Host', city: 'Roma' },
	{ name: 'Giovanni Angelotti', affiliation: 'PhD, causal inference', city: 'Lugano' },
	{ name: 'Raffaele Giancotti', affiliation: 'Postdoc, biomedical engineering', city: 'Università della Calabria' },
	{ name: 'Francesca Santucci', affiliation: 'Postdoc, neuroscience', city: 'Italian Institute of Technology' },
	{ name: 'Mirko Di Lucia', affiliation: 'Da Vinci Healthcare', city: 'Pisa' },
	{ name: 'Riccardo Barbieri', affiliation: 'Professor, biomedical engineering', city: 'Milano' },
	{ name: 'Trixie Tiangco', affiliation: 'Physician & patient advocate', city: 'Philippines' },
	{ name: 'Rahul Gorijavolu', affiliation: 'MIT Critical Data + Johns Hopkins University', city: 'Baltimore' },
];

const principles = [
	{
		Icon: HeartHandshake,
		label: 'Community-centered',
		body: 'The community leads. AI serves the community, not the other way around.',
	},
	{
		Icon: Compass,
		label: 'Not information transfer',
		body: 'This is not a course on AI. It is a room organized to disrupt mindsets and co-design the human-AI systems we will live with.',
	},
	{
		Icon: Activity,
		label: 'There is always an alternative',
		body: '"There is no alternative" is the slogan of those who benefit from the current arrangement. We are here precisely because there is.',
	},
	{
		Icon: Globe2,
		label: 'Beyond health',
		body: 'Life questions matter as much as clinical ones: jobs, futures, belonging, and agency.',
	},
	{
		Icon: Anchor,
		label: 'Embedded, not extracted',
		body: 'Partnerships with schools and embassies make sure the work remains useful after the gathering ends.',
	},
];

const partners = [
	{ name: 'Philippine Embassy in Italy', tag: 'Co-Organizer' },
	{ name: 'Vocational and Working Schools', tag: 'Education partners' },
	{ name: 'Catholic Journal', tag: 'Publishing partner' },
	{ name: 'MIT Critical Data', tag: 'Convener' },
];

export default function RomePage() {
	return (
		<div className="relative isolate min-h-screen overflow-hidden bg-[#f4ead8] text-[#19130f]">
			<RomePhysicsLayer />
			<div className="relative z-10">
				<HomeLink />
				<Hero />
				<Challenge />
				<CivicField />
				<Audience />
				<Programme />
				<Conveners />
				<Principles />
				<Partners />
				<Closing />
			</div>
		</div>
	);
}

function HomeLink() {
	return (
		<div className="relative z-20 bg-[#120f0d] pt-6">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="group inline-flex items-center gap-2 text-sm font-medium text-[#ecd7b3]/70 transition-colors hover:text-[#e8b75e]"
				>
					<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
					MIT Critical Data
				</Link>
			</div>
		</div>
	);
}

function Hero() {
	return (
		<section className="relative min-h-[86svh] overflow-hidden bg-[#120f0d] text-[#fff7ea]">
			<div className="absolute inset-0">
				<Image
					src="/home/datathon2.jpeg"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover opacity-[0.36] saturate-[0.85] contrast-110"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(18,15,13,0.98)_0%,_rgba(18,15,13,0.84)_42%,_rgba(18,15,13,0.42)_100%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,_rgba(34,104,128,0.42),_transparent_36%),radial-gradient(circle_at_18%_84%,_rgba(174,75,30,0.45),_transparent_38%)]" />
			</div>

			<div
				aria-hidden
				className="absolute inset-y-10 right-0 hidden w-[58%] lg:block"
			>
				<div className="absolute right-[9%] top-[3%] h-[86%] w-[48%] overflow-hidden rounded-t-full border border-[#e8b75e]/[0.35] bg-[#241811]/40">
					<Image
						src="/home/datathon4.jpeg"
						alt=""
						fill
						sizes="45vw"
						className="object-cover opacity-70 mix-blend-luminosity"
					/>
					<div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,15,13,0.05),_rgba(18,15,13,0.74))]" />
				</div>
				<div className="absolute right-[43%] top-[22%] h-[62%] w-[30%] rounded-t-full border border-[#2f8c95]/[0.45]" />
				<div className="absolute right-[3%] top-[24%] h-[56%] w-[18%] rounded-t-full border border-[#e8b75e]/30" />
			</div>

			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-screen"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
				}}
			/>

			<div className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
				<div className="max-w-4xl">
					<div className="mb-8 flex items-center gap-4">
						<div className="h-px w-14 bg-[#e8b75e]" />
						<span className="text-xs font-bold uppercase text-[#e8b75e]">
							MIT Critical Data presents
						</span>
					</div>

					<h1 className="font-bold leading-none">
						<span className="block text-6xl sm:text-8xl lg:text-9xl">
							AI as a
						</span>
						<span className="block pl-4 text-6xl italic text-[#e8b75e] sm:pl-12 sm:text-8xl lg:text-9xl">
							Catalyst
						</span>
						<span className="mt-3 block font-serif text-5xl italic text-[#9dd0d3] sm:text-7xl lg:text-8xl">
							Roma.
						</span>
					</h1>

					<div className="mt-8 max-w-2xl pl-0 sm:pl-12">
						<p className="text-xl font-medium leading-snug text-[#fff7ea] sm:text-2xl lg:text-3xl">
							Centering immigrant communities in the AI revolution.
						</p>
						<p className="mt-5 max-w-xl text-base leading-relaxed text-[#ecd7b3]/[0.78] sm:text-lg">
							Second-generation Filipinos, schools, and MIT Critical Data
							building AI literacy from the ground up.
						</p>
					</div>

					<div className="mt-10 flex flex-wrap items-center gap-3 pl-0 sm:pl-12">
						<HeroFact label="Date" value="September 4-5, 2026" />
						<HeroFact label="Venue" value="Collegio Filippino, Roma" />
						<HeroFact label="Format" value="1.5 days · 60-80 in the room" />
						<HeroFact label="Frame" value="Bayanihan + Bottega" />
					</div>

					<div className="mt-12 pl-0 sm:pl-12">
						<div className="flex flex-col gap-3 sm:flex-row">
							<Link
								href="/events/rome/register"
								className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-[#e8b75e]/[0.45] bg-[#e8b75e] px-5 text-sm font-bold text-[#19130f] transition-transform hover:-translate-y-0.5 hover:bg-[#f2c76d]"
							>
								Apply to join
								<ArrowRight className="h-4 w-4" />
							</Link>
							<Link
								href="#field"
								className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-[#ecd7b3]/[0.18] bg-[#fff7ea]/[0.08] px-5 text-sm font-bold text-[#fff7ea] transition-transform hover:-translate-y-0.5 hover:border-[#9dd0d3]/[0.45] hover:text-[#9dd0d3]"
							>
								Follow the field
								<ArrowDown className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function HeroFact({ label, value }: { label: string; value: string }) {
	return (
		<div className="rounded-md border border-[#ecd7b3]/[0.18] bg-[#fff7ea]/[0.08] px-4 py-3 backdrop-blur">
			<div className="text-[0.68rem] font-semibold uppercase text-[#ecd7b3]/[0.55]">
				{label}
			</div>
			<div className="mt-1 text-sm font-semibold text-[#fff7ea]">{value}</div>
		</div>
	);
}

function Challenge() {
	return (
		<section className="relative overflow-hidden bg-[#19130f] text-[#fff7ea]">
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b75e]/70 to-transparent" />
			<div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
				<div className="lg:col-span-5">
					<SectionLabel tone="dark" eyebrow="I" title="The Challenge" />
					<div className="mt-12 flex items-start gap-4">
						<span className="font-serif text-9xl font-bold italic leading-[0.78] text-[#e4562a] sm:text-[11rem]">
							58
						</span>
						<span className="mt-3 font-serif text-3xl italic text-[#e8b75e]">
							yr
						</span>
					</div>
					<p className="mt-7 max-w-sm font-serif text-2xl italic leading-snug text-[#ecd7b3]/[0.76]">
						Average age at death for Filipinos in Italy.
					</p>
				</div>

				<div className="lg:col-span-7 lg:pt-10">
					<h2 className="font-serif text-4xl font-bold leading-tight text-[#fff7ea] sm:text-5xl lg:text-6xl">
						Most affected.{' '}
						<span className="italic text-[#e8b75e]">Least included.</span>
					</h2>
					<p className="mt-8 text-lg leading-relaxed text-[#ecd7b3]/[0.82] sm:text-xl">
						Immigrant communities in Italy are among the most affected yet least
						included populations in the AI revolution. As AI reshapes labor
						markets, education, and healthcare, communities like the Filipino
						diaspora risk being left further behind unless they are placed at
						the center of the response.
					</p>

					<div className="mt-10 space-y-5 border-y border-[#ecd7b3]/[0.16] py-8">
						<DataGap
							label="Italian general population"
							value="83 yr"
							width="100%"
							tone="quiet"
						/>
						<DataGap
							label="Filipinos in Italy"
							value="58 yr"
							width="70%"
							tone="hot"
						/>
						<DataGap label="The gap" value="25 yr" width="30%" tone="gold" />
					</div>

					<p className="mt-8 border-l-2 border-[#e4562a] pl-5 text-base italic leading-relaxed text-[#ecd7b3]/[0.72] sm:text-lg">
						The 58 is not a statistic to file away. It is a starting line.
					</p>
				</div>
			</div>
		</section>
	);
}

function DataGap({
	label,
	value,
	width,
	tone,
}: {
	label: string;
	value: string;
	width: string;
	tone: 'quiet' | 'hot' | 'gold';
}) {
	const colors = {
		quiet: 'bg-[#ecd7b3]/[0.52]',
		hot: 'bg-[#e4562a]',
		gold: 'bg-[#e8b75e]',
	};

	return (
		<div>
			<div className="mb-2 flex items-center justify-between gap-4">
				<span className="text-xs font-semibold uppercase text-[#ecd7b3]/[0.56]">
					{label}
				</span>
				<span className="font-serif text-2xl font-bold italic text-[#fff7ea]">
					{value}
				</span>
			</div>
			<div className="h-2 overflow-hidden rounded-full bg-[#fff7ea]/10">
				<div
					className={`h-full rounded-full ${colors[tone]}`}
					style={{ width }}
				/>
			</div>
		</div>
	);
}

function CivicField() {
	return (
		<section
			id="field"
			className="relative scroll-mt-24 overflow-hidden bg-[#eaf1e9] text-[#17201d]"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_rgba(47,140,149,0.22),_transparent_34%),radial-gradient(circle_at_85%_78%,_rgba(228,86,42,0.16),_transparent_36%)]" />
			<div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
				<div className="lg:sticky lg:top-28 lg:col-span-5 lg:h-fit">
					<SectionLabel eyebrow="II" title="The Field" />
					<h2 className="mt-10 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
						When the room moves, the system moves.
					</h2>
					<p className="mt-7 text-lg leading-relaxed text-[#44524d]">
						AI literacy does not land as a lecture. It behaves more like a civic
						field: people pull on it, trust gives it shape, and the whole
						structure changes under real pressure.
					</p>
					<div className="mt-8 grid grid-cols-3 gap-3">
						<FieldMetric value="4" label="circles" />
						<FieldMetric value="25" label="years" />
						<FieldMetric value="1" label="room" />
					</div>
				</div>

				<div className="lg:col-span-7">
					<div className="relative min-h-[560px] overflow-hidden rounded-lg border border-[#638b86]/[0.35] bg-[#102326] text-[#f7efe0] shadow-2xl shadow-[#102326]/[0.18]">
						<div className="absolute inset-0">
							<Image
								src="/home/datathon1.jpeg"
								alt=""
								fill
								sizes="(min-width: 1024px) 58vw, 100vw"
								className="object-cover opacity-[0.28] grayscale"
							/>
							<div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(16,35,38,0.94),_rgba(16,35,38,0.72)_50%,_rgba(228,86,42,0.2))]" />
						</div>

						<div aria-hidden className="absolute inset-8 sm:inset-12">
							<div className="absolute bottom-0 left-[8%] h-[72%] w-[24%] rounded-t-full border border-[#9dd0d3]/[0.35]" />
							<div className="absolute bottom-0 left-[37%] h-[84%] w-[28%] rounded-t-full border border-[#e8b75e]/[0.36]" />
							<div className="absolute bottom-0 right-[8%] h-[64%] w-[24%] rounded-t-full border border-[#e4562a]/[0.38]" />
							<div className="absolute left-[15%] top-[32%] h-3 w-3 rounded-full bg-[#9dd0d3]" />
							<div className="absolute left-[48%] top-[14%] h-4 w-4 rounded-full bg-[#e8b75e]" />
							<div className="absolute right-[18%] top-[40%] h-3 w-3 rounded-full bg-[#e4562a]" />
							<div className="absolute left-[28%] top-[54%] h-px w-[44%] rotate-[-13deg] bg-[#9dd0d3]/[0.45]" />
							<div className="absolute left-[48%] top-[23%] h-px w-[29%] rotate-[34deg] bg-[#e8b75e]/[0.45]" />
						</div>

						<div className="relative flex min-h-[560px] flex-col justify-end p-6 sm:p-10">
							<div className="max-w-xl">
								<div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#f7efe0]/[0.16] bg-[#f7efe0]/[0.08] px-3 py-2 text-sm font-semibold text-[#9dd0d3]">
									<Network className="h-4 w-4" />
									Bayanihan field
								</div>
								<h3 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">
									Community as infrastructure, not audience.
								</h3>
								<p className="mt-5 text-base leading-relaxed text-[#f7efe0]/[0.72] sm:text-lg">
									The work begins with the people already carrying knowledge
									across homes, classrooms, churches, clinics, and workplaces.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FieldMetric({ value, label }: { value: string; label: string }) {
	return (
		<div className="rounded-md border border-[#638b86]/[0.28] bg-white/[0.46] p-4">
			<div className="font-serif text-3xl font-bold italic text-[#b54824]">
				{value}
			</div>
			<div className="mt-1 text-xs font-semibold uppercase text-[#44524d]">
				{label}
			</div>
		</div>
	);
}

function Audience() {
	return (
		<section className="relative bg-[#f4ead8] text-[#19130f]">
			<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
				<SectionLabel eyebrow="III" title="Who We Engage" />

				<h2 className="mt-10 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
					The room is built around{' '}
					<span className="italic text-[#b54824]">three circles.</span>
				</h2>

				<div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
					{audience.map(({ Icon, title, body }, i) => (
						<article
							key={title}
							className="group relative rounded-lg border border-[#d2bea0] bg-[#fff7ea]/[0.76] p-7 transition-transform hover:-translate-y-1 hover:border-[#b54824]/50 sm:p-9"
						>
							<div className="mb-8 flex items-start justify-between">
								<Icon className="h-7 w-7 text-[#b54824]" />
								<span className="font-serif text-4xl font-bold italic text-[#2f8c95]/[0.28]">
									0{i + 1}
								</span>
							</div>
							<h3 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
								{title}
							</h3>
							<p className="mt-4 text-base leading-relaxed text-[#5d5145] sm:text-lg">
								{body}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function Programme() {
	return (
		<section className="relative overflow-hidden bg-[#102326] text-[#f7efe0]">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,_rgba(157,208,211,0.17),_transparent_33%),radial-gradient(circle_at_86%_82%,_rgba(232,183,94,0.18),_transparent_36%)]" />
			<div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
				<SectionLabel tone="dark" eyebrow="IV" title="What We Will Do" />

				<h2 className="mt-10 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
					Four threads.{' '}
					<span className="italic text-[#e8b75e]">One fabric.</span>
				</h2>

				<div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
					{programme.map(({ Icon, number, title, tagline, body }) => (
						<article
							key={number}
							className="group relative overflow-hidden rounded-lg border border-[#f7efe0]/[0.16] bg-[#f7efe0]/[0.07] p-7 transition-transform hover:-translate-y-1 hover:border-[#e8b75e]/[0.45] sm:p-9"
						>
							<div className="absolute right-6 top-5 font-serif text-7xl font-bold italic leading-none text-[#e4562a]/[0.18]">
								{number}
							</div>
							<Icon className="relative h-7 w-7 text-[#e8b75e]" />
							<h3 className="relative mt-8 font-serif text-2xl font-bold leading-tight sm:text-3xl">
								{title}
							</h3>
							<p className="relative mt-3 text-base italic leading-snug text-[#9dd0d3]">
								{tagline}
							</p>
							<p className="relative mt-5 text-base leading-relaxed text-[#f7efe0]/[0.72] sm:text-lg">
								{body}
							</p>
						</article>
					))}
				</div>

				{/* Around Roma — the half-day social moment */}
				<div className="mt-12 grid grid-cols-1 gap-6 rounded-lg border border-[#9dd0d3]/30 bg-[#9dd0d3]/[0.06] p-8 sm:grid-cols-12 sm:p-10">
					<div className="sm:col-span-3">
						<span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.32em] text-[#9dd0d3]">
							+ Half-day
						</span>
						<h3 className="mt-3 font-serif text-3xl italic font-bold tracking-tight text-[#fff7ea]">
							Around Roma.
						</h3>
					</div>
					<div className="sm:col-span-9">
						<p className="text-base leading-relaxed text-[#f7efe0]/85 sm:text-lg">
							Half a day reserved for walking the city together. No workshops, no slides — mentors
							and participants moving through Roma side by side. Social capital is the substrate
							everything else grows from; we will not pretend a tight schedule can replace it.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function Conveners() {
	return (
		<section className="relative bg-[#fff7ea] text-[#19130f]">
			<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
				<SectionLabel eyebrow="V" title="The Conveners" />

				<h2 className="mt-10 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
					Planned by{' '}
					<span className="italic text-[#b54824]">a small group.</span>
				</h2>
				<p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#19130f]/80 sm:text-xl">
					Friends across Italy, Boston, and Manila &mdash; biomedical engineers, postdocs,
					clinicians, a parish priest, a software engineer, students. None of us alone has the
					answers; that&rsquo;s the point.
				</p>

				<ol className="mt-12 divide-y divide-[#b54824]/15 border-y border-[#b54824]/20">
					{planners.map((p, i) => (
						<li key={p.name} className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-12 sm:gap-6 sm:py-7">
							<div className="sm:col-span-1">
								<span className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#a89881] tabular-nums">
									{String(i + 1).padStart(2, '0')}
								</span>
							</div>
							<div className="sm:col-span-5">
								<h3 className="font-serif text-xl font-bold leading-tight text-[#19130f] sm:text-2xl">
									{p.name}
								</h3>
							</div>
							<div className="sm:col-span-4 text-base leading-snug text-[#5c4a3d]">
								{p.affiliation}
							</div>
							<div className="sm:col-span-2 text-sm italic text-[#b54824] sm:text-base">
								{p.city}
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

function Principles() {
	return (
		<section className="relative bg-[#fff7ea] text-[#19130f]">
			<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
				<SectionLabel eyebrow="VI" title="Key Principles" />

				<h2 className="mt-10 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
					What we hold{' '}
					<span className="italic text-[#b54824]">non-negotiable.</span>
				</h2>

				<ol className="mt-14 divide-y divide-[#d2bea0] border-y border-[#d2bea0]">
					{principles.map(({ Icon, label, body }, i) => (
						<li
							key={label}
							className="grid grid-cols-1 gap-6 py-9 sm:grid-cols-12 sm:py-11"
						>
							<div className="flex items-center gap-4 sm:col-span-2 sm:flex-col sm:items-start">
								<span className="text-xs font-bold uppercase text-[#81715f]">
									0{i + 1}
								</span>
								<Icon className="h-7 w-7 text-[#b54824]" />
							</div>
							<div className="sm:col-span-4">
								<h3 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
									{label}.
								</h3>
							</div>
							<div className="sm:col-span-6">
								<p className="text-base leading-relaxed text-[#5d5145] sm:text-lg">
									{body}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

function Partners() {
	return (
		<section className="relative overflow-hidden bg-[#eaf1e9] text-[#17201d]">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
				<div className="lg:col-span-5">
					<SectionLabel eyebrow="VII" title="Partners" />
					<h2 className="mt-10 font-serif text-4xl font-bold leading-tight sm:text-5xl">
						This is a{' '}
						<span className="italic text-[#b54824]">collective effort.</span>
					</h2>
					<p className="mt-6 text-lg leading-relaxed text-[#44524d]">
						The gathering is designed to move through trusted institutions and
						stay accountable to the communities it serves.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
					{partners.map((partner, i) => (
						<div
							key={partner.name}
							className="rounded-lg border border-[#638b86]/[0.28] bg-white/[0.48] p-6"
						>
							<span className="font-serif text-4xl font-bold italic text-[#2f8c95]/[0.34]">
								0{i + 1}
							</span>
							<div className="mt-8 font-serif text-2xl font-bold leading-snug">
								{partner.name}
							</div>
							<div className="mt-2 text-sm font-semibold text-[#b54824]">
								{partner.tag}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Closing() {
	return (
		<section className="relative overflow-hidden bg-[#120f0d] text-[#fff7ea]">
			<div className="absolute inset-0">
				<Image
					src="/home/datathon3.jpeg"
					alt=""
					fill
					sizes="100vw"
					className="object-cover opacity-20 grayscale"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,15,13,0.88),_rgba(18,15,13,0.98))]" />
			</div>
			<div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-36 lg:px-8">
				<div className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8b75e]/[0.34] bg-[#e8b75e]/10">
					<HandHeart className="h-7 w-7 text-[#e8b75e]" />
				</div>
				<p className="font-serif text-4xl font-bold italic leading-tight sm:text-5xl lg:text-6xl">
					&quot;We figure this out{' '}
					<span className="text-[#e8b75e]">together.</span>&quot;
				</p>
				<p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#ecd7b3]/[0.72] sm:text-lg">
					Bayanihan. Insieme. Kapwa. A practical invitation to build AI with the
					people whose futures are already being changed by it.
				</p>
				<div className="mt-12 inline-flex items-center gap-3 rounded-md border border-[#ecd7b3]/[0.16] bg-[#fff7ea]/[0.08] px-4 py-3 text-sm font-semibold text-[#9dd0d3]">
					<Activity className="h-4 w-4" />
					AI as a Catalyst - Roma - September 4-5, 2026
				</div>
				<div className="mt-8">
					<Link
						href="/events/rome/register"
						className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#e8b75e] px-5 text-sm font-bold text-[#19130f] transition-transform hover:-translate-y-0.5 hover:bg-[#f2c76d]"
					>
						Apply to attend
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function SectionLabel({
	eyebrow,
	title,
	tone = 'light',
}: {
	eyebrow: string;
	title: string;
	tone?: 'light' | 'dark';
}) {
	return (
		<div className="flex items-center gap-4">
			<div
				className={
					tone === 'dark' ? 'h-px w-14 bg-[#e8b75e]' : 'h-px w-14 bg-[#b54824]'
				}
			/>
			<span
				className={
					tone === 'dark'
						? 'text-xs font-bold uppercase text-[#e8b75e]'
						: 'text-xs font-bold uppercase text-[#b54824]'
				}
			>
				{eyebrow} / {title}
			</span>
		</div>
	);
}
