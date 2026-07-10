import { BellRing, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = 'dublink.llmathon@gmail.com';
const REGISTER_URL = 'https://medwrite.ai/dublink-event';

export default function RegisterCTA() {
	return (
		<section
			id="register"
			className="scroll-mt-16 relative bg-black/60 py-32 sm:py-40 overflow-hidden"
		>
			{/* Grain overlay */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Massive radial glows */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.12)_0%,_transparent_50%)] pointer-events-none" />
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
				{/* Kicker */}
				<div className="inline-flex items-center gap-4 mb-10">
					<div className="h-px w-12 bg-teal-400/60" />
					<span className="text-[0.7rem] uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Registration
					</span>
					<div className="h-px w-12 bg-teal-400/60" />
				</div>

				{/* Headline */}
				<h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-8">
					<span className="block">Be there when Dublin</span>
					<span className="block italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
						meets AI.
					</span>
				</h2>

				<p className="text-lg sm:text-xl text-white/55 mb-6 max-w-2xl mx-auto leading-relaxed">
					Register your interest now and we&rsquo;ll keep you posted on the
					programme in the run-up to the event.
				</p>

				<div className="mb-12 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/[0.06] px-5 py-2 text-sm text-teal-200/90">
					<BellRing className="h-4 w-4" />
					Places will be limited, so don&rsquo;t miss out
				</div>

				{/* Primary CTA — registration form */}
				<div className="flex justify-center">
					<a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
						<Button className="relative h-16 rounded-full px-12 text-lg font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:via-teal-400 hover:to-cyan-400 text-white shadow-2xl shadow-emerald-900/40 transition-all duration-300 hover:shadow-teal-900/40 hover:-translate-y-0.5 group overflow-hidden">
							<span className="relative flex items-center">
								Register Your Interest
								<ArrowUpRight className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
							</span>
						</Button>
					</a>
				</div>

				{/* Contact */}
				<div className="mt-12 text-sm text-white/40 leading-relaxed">
					<p>
						General enquiries for registration, programme, speakers or
						sponsorship:{' '}
						<a
							href={`mailto:${CONTACT_EMAIL}`}
							className="font-mono text-teal-300/80 hover:text-teal-200 transition-colors"
						>
							{CONTACT_EMAIL}
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
