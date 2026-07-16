import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ArrowDown } from 'lucide-react';
import PhotoGallery from '@/components/elements/PhotoGallery';
import RenderParticles from '@/components/primitives/particles';

const heroPhotos = [
	{
		src: '/dublin/photos/datathon1.jpeg',
		alt: 'Participants at the MakeHealth Colombia datathon',
		span: 'sm:col-span-2 sm:row-span-2',
	},
	{
		src: '/dublin/photos/datathon3.jpeg',
		alt: 'Teams celebrating at a health datathon workshop',
	},
	{
		src: '/dublin/photos/datathon4.jpeg',
		alt: 'Datathon cohort gathered under the atrium',
	},
	{
		src: '/dublin/photos/datathon2.jpeg',
		alt: 'Datathon participants at MIT',
		span: 'sm:col-span-2',
		// Wide tile: frame the crowd rather than the dome so faces aren't cropped
		position: 'object-[center_72%]',
	},
];

export default function Hero() {
	return (
		<div className="relative min-h-screen flex items-center overflow-hidden">
			{/* Cinematic photo backdrop — Samuel Beckett Bridge at dusk
			    (Giuseppe Milo, CC BY 2.0, colour-graded; credit in footer) */}
			<div aria-hidden className="absolute inset-0">
				{/* Phones: zoomed out (object-contain, anchored top) so the whole
				    bridge reads instead of a heavy portrait centre-crop; desktop
				    keeps the full-bleed cover */}
				<Image
					src="/dublin/photos/beckett-bridge.jpg"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-contain object-top opacity-90 lg:object-cover lg:object-center lg:opacity-75"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black lg:from-black/50" />
				{/* Solid scrim behind the text column, desktop only — on phones a
				    light flat overlay keeps the city visible under the text */}
				<div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/75 lg:to-transparent" />
			</div>

			{/* Grain overlay — atmospheric texture */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay z-[1]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Radial glows — Liffey teal & Irish emerald */}
			<div className="absolute -top-1/4 -right-1/4 h-[80vh] w-[80vh] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.15)_0%,_transparent_60%)] pointer-events-none" />
			<div className="absolute -bottom-1/4 -left-1/4 h-[70vh] w-[70vh] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.12)_0%,_transparent_60%)] pointer-events-none" />

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />

			{/* The page-wide particle network sits behind Hero's own opaque
			    photo backdrop and would otherwise be invisible here, so Hero
			    gets its own contained layer, floating over the photo,
			    under the text */}
			<div aria-hidden className="absolute inset-0 z-[3] pointer-events-none">
				<RenderParticles fullScreen={false} id="tsparticles-hero" />
			</div>

			{/* Content — on phones/tablets, start below the contained photo band
			    (~66vw tall) so the city stays fully visible above the text */}
			<div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[64vw] pb-24 lg:py-32">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
					<div className="lg:col-span-8">
						{/* Kicker — editorial */}
						<div className="flex items-center gap-4 mb-10 animate-in fade-in-0 slide-in-from-top-2 duration-700">
							<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
							<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
								Connect &middot; Collaborate &middot; Innovate
							</span>
						</div>

						{/* Asymmetric editorial title */}
						<h1
							className="font-bold tracking-tighter animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
							style={{ animationDelay: '100ms', animationFillMode: 'both' }}
						>
							<span className="block leading-[0.85] text-[16vw] sm:text-8xl lg:text-[8.5rem] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
								DubLINK
							</span>
							{/* Own leading so a mobile wrap to two lines doesn't collide
							    with itself under the tight leading used above */}
							<span className="block mt-2 leading-[1.15] text-[9vw] sm:text-5xl lg:text-[4.25rem] italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent pl-[4%] pr-4 pb-2">
								AI in Healthcare LLM-athon
							</span>
						</h1>

						{/* Subtitle */}
						<div
							className="mt-10 max-w-2xl lg:pl-[8%] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
							style={{ animationDelay: '300ms', animationFillMode: 'both' }}
						>
							<p className="text-xl sm:text-2xl font-medium text-white/90 tracking-tight leading-snug">
								One day. Every discipline. Hands on with large language models
								in healthcare.
							</p>
							<p className="mt-5 text-base sm:text-lg text-white/80 italic leading-relaxed max-w-xl">
								Clinicians, researchers, students, engineers and patient
								advocates, working side by side in the heart of Dublin.
							</p>
						</div>

						{/* Editorial info bar */}
						<div
							className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 lg:pl-[8%] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
							style={{ animationDelay: '500ms', animationFillMode: 'both' }}
						>
							<div className="flex items-center gap-3">
								<span className="inline-flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
								<span className="text-sm text-white/85 font-medium tracking-wide">
									Saturday, 19 September 2026
								</span>
							</div>
							<span className="hidden sm:inline h-4 w-px bg-white/20" />
							<span className="text-sm text-white/85 font-medium tracking-wide">
								 Dublin, Ireland
							</span>
						</div>

						{/* CTA + scroll hint */}
						<div
							className="mt-14 lg:pl-[8%] flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
							style={{ animationDelay: '700ms', animationFillMode: 'both' }}
						>
							<a
								href="https://medwrite.ai/dublink-event"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									type="button"
									className="relative h-14 rounded-full px-8 text-base font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:via-teal-400 hover:to-cyan-400 text-white shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:shadow-teal-900/30 hover:-translate-y-0.5 group overflow-hidden"
								>
									<span className="relative flex items-center">
										Register Your Interest
										<ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
									</span>
								</Button>
							</a>

							<Link
								href="#about"
								className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-teal-300 transition-colors group"
							>
								<ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
								Learn more about the event
							</Link>
						</div>
					</div>

					{/* Event logo — sits high in the frame, clear of the photo's
					    bridge/building band lower down */}
					<div
						className="hidden lg:flex lg:col-span-4 lg:self-start justify-center pt-4 animate-in fade-in-0 zoom-in-95 duration-1000"
						style={{ animationDelay: '400ms', animationFillMode: 'both' }}
					>
						<div className="relative">
							<div
								aria-hidden
								className="absolute inset-0 scale-110 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.25)_0%,_rgba(6,182,212,0.08)_45%,_transparent_70%)] blur-2xl"
							/>
							<Image
								src="/dublin/dublink-logo-dark.png"
								alt="DubLINK LLM-athon, AI in Healthcare"
								width={400}
								height={358}
								priority
								className="relative h-auto w-full max-w-[340px] drop-shadow-[0_0_35px_rgba(20,184,166,0.2)]"
							/>
						</div>
					</div>
				</div>

				{/* The LLM-athon in action — click any photo to enlarge */}
				<div
					className="mt-16 lg:mt-20 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
					style={{ animationDelay: '900ms', animationFillMode: 'both' }}
				>
					<div className="flex items-center gap-4 mb-5">
						<div className="h-px w-8 bg-teal-400/40" />
						<span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 font-bold">
							Datathons in action
						</span>
					</div>
					<PhotoGallery
						photos={heroPhotos}
						className="grid grid-cols-2 sm:grid-cols-4 sm:auto-rows-[170px] lg:auto-rows-[200px] gap-3 sm:gap-4"
						itemClassName="aspect-[4/3] sm:aspect-auto"
					/>
				</div>
			</div>
		</div>
	);
}
