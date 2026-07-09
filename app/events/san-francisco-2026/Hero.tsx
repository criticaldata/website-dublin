import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ArrowDown } from 'lucide-react';

const REGISTER_URL = '/events/san-francisco-2026/register';

export default function Hero() {
	return (
		<div className="relative min-h-screen flex items-center overflow-hidden">
			{/* Grain overlay — atmospheric texture */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay z-[1]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Radial glows — asymmetric */}
			<div className="absolute -top-1/4 -right-1/4 h-[80vh] w-[80vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.15)_0%,_transparent_60%)] pointer-events-none" />
			<div className="absolute -bottom-1/4 -left-1/4 h-[70vh] w-[70vh] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.12)_0%,_transparent_60%)] pointer-events-none" />

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />

			{/* Content */}
			<div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
				{/* Kicker — editorial */}
				<div className="flex items-center gap-4 mb-10 animate-in fade-in-0 slide-in-from-top-2 duration-700">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						MIT Critical Data presents
					</span>
				</div>

				{/* Asymmetric editorial title */}
				<h1
					className="font-bold tracking-tighter leading-[0.85] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
					style={{ animationDelay: '100ms', animationFillMode: 'both' }}
				>
					<span className="block text-[18vw] sm:text-8xl lg:text-[10rem] bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent">
						AI as a
					</span>
					<span className="block text-[18vw] sm:text-8xl lg:text-[10rem] italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent pl-[6%] lg:pl-[10%] pr-4">
						Catalyst.
					</span>
				</h1>

				{/* Subtitle + epigraph */}
				<div
					className="mt-10 lg:mt-14 max-w-2xl lg:pl-[10%] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
					style={{ animationDelay: '300ms', animationFillMode: 'both' }}
				>
					<p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 tracking-tight leading-snug">
						Reimagining Health Innovation
					</p>
					<p className="mt-5 text-base sm:text-lg text-white/50 italic leading-relaxed max-w-xl">
						Where ambitious capital meets collective wisdom, and both win.
					</p>
				</div>

				{/* Editorial info bar */}
				<div
					className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 lg:pl-[10%] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
					style={{ animationDelay: '500ms', animationFillMode: 'both' }}
				>
					<div className="flex items-center gap-3">
						<span className="inline-flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
						<span className="text-sm text-white/70 font-medium tracking-wide">
							May 1&ndash;2, 2026
						</span>
					</div>
					<span className="hidden sm:inline h-4 w-px bg-white/20" />
					<span className="text-sm text-white/70 font-medium tracking-wide">
						San Francisco Bay Area
					</span>
					<span className="hidden sm:inline h-4 w-px bg-white/20" />
					<span className="text-sm text-amber-300/90 font-semibold tracking-wide">
						Free to attend
					</span>
				</div>

				{/* CTA + scroll hint */}
				<div
					className="mt-14 lg:pl-[10%] flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
					style={{ animationDelay: '700ms', animationFillMode: 'both' }}
				>
					<Link href={REGISTER_URL}>
						<Button className="relative h-14 rounded-full px-8 text-base font-semibold bg-gradient-to-r from-red-700 via-amber-600 to-orange-500 hover:from-red-600 hover:via-amber-500 hover:to-orange-400 text-white shadow-2xl shadow-red-900/30 transition-all duration-300 hover:shadow-amber-900/30 hover:-translate-y-0.5 group overflow-hidden">
							<span className="relative flex items-center">
								Apply to Attend
								<ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</span>
						</Button>
					</Link>

					<Link
						href="#about"
						className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-amber-400 transition-colors group"
					>
						<ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
						Learn more about the gathering
					</Link>
				</div>
			</div>
		</div>
	);
}
