import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Clock } from 'lucide-react';

const REGISTER_URL = '/events/san-francisco-2026/register';

export default function RegisterCTA() {
	return (
		<section
			id="register-cta"
			className="relative bg-black/60 py-32 sm:py-40 overflow-hidden"
		>
			{/* Grain overlay */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Andean textile pattern */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 10 L40 15 L35 20 L40 25 L35 30 L30 35 L25 30 L20 25 L25 20 L20 15 L25 10 Z' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Massive radial glows */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.12)_0%,_transparent_50%)] pointer-events-none" />
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.15)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
				{/* Kicker */}
				<div className="inline-flex items-center gap-4 mb-10">
					<div className="h-px w-12 bg-amber-500/60" />
					<span className="text-[0.7rem] uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						Apply to Attend
					</span>
					<div className="h-px w-12 bg-amber-500/60" />
				</div>

				{/* Headline */}
				<h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-8">
					Join the{' '}
					<span className="italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
						gathering.
					</span>
				</h2>

				<p className="text-lg sm:text-xl text-white/55 mb-12 max-w-2xl mx-auto leading-relaxed">
					Two days of workshops, dialogue, and collaboration in the heart of
					Silicon Valley. Space is limited and applications are reviewed as
					they come in.
				</p>

				{/* Primary CTA */}
				<Link href={REGISTER_URL} className="inline-block">
					<Button className="relative h-16 rounded-full px-12 text-lg font-semibold bg-gradient-to-r from-red-700 via-amber-600 to-orange-500 hover:from-red-600 hover:via-amber-500 hover:to-orange-400 text-white shadow-2xl shadow-red-900/40 transition-all duration-300 hover:shadow-amber-900/40 hover:-translate-y-0.5 group overflow-hidden">
						<span className="relative flex items-center">
							Apply Now
							<ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</Button>
				</Link>

				{/* Meta info */}
				<div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/40">
					<span className="inline-flex items-center gap-1.5 text-amber-300/80 font-semibold">
						<span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
						Free to attend
					</span>
					<span className="hidden sm:inline h-1 w-1 rounded-full bg-white/20" />
					<div className="flex items-center gap-2">
						<Clock className="h-3.5 w-3.5" />
						<span>Takes about 5 minutes</span>
					</div>
					<span className="hidden sm:inline h-1 w-1 rounded-full bg-white/20" />
					<span>Apply for one day or both</span>
				</div>
			</div>
		</section>
	);
}
