import {
	MessagesSquare,
	Stethoscope,
	Scale,
	Brain,
	ShieldCheck,
	Users,
	Laptop,
	Server,
} from 'lucide-react';

const themes = [
	{
		icon: MessagesSquare,
		title: 'Prompt Engineering',
		detail: 'Crafting effective prompts for clinical and non-clinical scenarios.',
	},
	{
		icon: Stethoscope,
		title: 'Clinical Reasoning',
		detail: 'Testing how LLMs handle realistic healthcare cases.',
	},
	{
		icon: Scale,
		title: 'AI Evaluation',
		detail: 'Comparing leading models and critically appraising their outputs.',
	},
	{
		icon: Brain,
		title: 'Cognitive Bias',
		detail: 'Spotting failure modes in both humans and machines.',
	},
	{
		icon: ShieldCheck,
		title: 'Governance & Ethics',
		detail: 'Implementing AI safely and responsibly in healthcare.',
	},
	{
		icon: Users,
		title: 'Multidisciplinary Teams',
		detail: 'Small groups mixing clinical, technical and patient perspectives.',
	},
];

export default function Workshop() {
	return (
		<section className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden">
			<div className="absolute left-0 top-1/2 -translate-y-1/2 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						The Workshop
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl mb-6">
					<span className="block">Real scenarios,</span>
					<span className="block">leading LLMs,</span>
					<span className="block italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
						no spectators.
					</span>
				</h2>
				<p className="text-base sm:text-lg text-white/55 max-w-3xl mb-3 leading-relaxed">
					Participants work in multidisciplinary groups using leading LLMs to
					tackle realistic clinical and non-clinical healthcare scenarios.
				</p>
				<p className="text-base sm:text-lg text-white/55 max-w-3xl mb-8 leading-relaxed">
					The focus: prompt engineering, clinical reasoning, AI evaluation,
					cognitive bias, governance, ethics and safe implementation.
				</p>

				<div className="mb-14 flex flex-col items-start gap-3">
					<div className="inline-flex items-center gap-2.5 rounded-full border border-teal-400/30 bg-teal-400/[0.06] px-5 py-2.5 text-sm text-teal-200/90">
						<Server className="h-4 w-4 shrink-0" />
						<span>
							During the event, MedWrite.ai will provide participants with
							access to leading AI models, including OpenAI&rsquo;s, running on
							servers hosted in Europe.
						</span>
					</div>
					<div className="inline-flex items-center gap-2.5 rounded-full border border-teal-400/30 bg-teal-400/[0.06] px-5 py-2.5 text-sm text-teal-200/90">
						<Laptop className="h-4 w-4 shrink-0" />
						<span>
							Participants are recommended to bring their own laptops for the
							hands-on activities.
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
					{themes.map((theme) => (
						<div
							key={theme.title}
							className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 hover:from-teal-400/[0.06] transition-all duration-300 px-6 py-7 overflow-hidden"
						>
							<div className="absolute -top-10 -right-10 h-24 w-24 bg-teal-400/0 group-hover:bg-teal-400/15 blur-2xl rounded-full transition-all duration-500" />
							<theme.icon className="h-6 w-6 text-teal-300/80 mb-4" />
							<h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
								{theme.title}
							</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								{theme.detail}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
