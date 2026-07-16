import Link from 'next/link';
import { MapPin, TrainFront, Car, ExternalLink, Navigation } from 'lucide-react';
import LazyIframe from '@/components/primitives/lazy-iframe';

const DIRECTIONS_URL =
	'https://www.tuh.ie/Departments/Centre-for-Learning-Development/Map-Directions.html';

const MAP_EMBED_URL =
	'https://maps.google.com/maps?q=20Dublin%2C%20Ireland&z=15&hl=en&output=embed';

const GOOGLE_MAPS_URL =
	'https://www.google.com/maps/dir/?api=1&destination=,+Dublin,+Ireland';

export default function Venue() {
	return (
		<section
			id="venue"
			className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="absolute right-0 top-1/2 -translate-y-1/2 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Venue &amp; Getting There
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.15] max-w-4xl mb-14">
					<span className="block">In the heart of</span>
					<span className="block italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
						Dublin healthcare.
					</span>
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
					{/* Interactive map */}
					<div className="relative rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl shadow-teal-900/20">
						<LazyIframe
							url={MAP_EMBED_URL}
							title="Map of Dublin"
							className="aspect-[4/3] w-full"
						/>
						<a
							href={GOOGLE_MAPS_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-black/90 hover:border-teal-400/50 transition-all"
						>
							<Navigation className="h-3.5 w-3.5 text-teal-300" />
							Open directions in Google Maps
						</a>
					</div>

					{/* How to get there */}
					<div className="space-y-4">
						<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 px-7 py-6">
							<div className="flex items-start gap-4">
								<MapPin className="h-6 w-6 shrink-0 text-teal-300/80 mt-0.5" />
								<div>
									<h3 className="text-lg font-bold text-white tracking-tight mb-1">
										The Venue
									</h3>
									<p className="text-sm sm:text-base text-white/55 leading-relaxed">
										Dublin City
									</p>
								</div>
							</div>
						</div>

						<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 px-7 py-6">
							<div className="flex items-start gap-4">
								<TrainFront className="h-6 w-6 shrink-0 text-teal-300/80 mt-0.5" />
								<div>
									<h3 className="text-lg font-bold text-white tracking-tight mb-1">
										From the City Centre: Luas Red Line
									</h3>
									<p className="text-sm sm:text-base text-white/55 leading-relaxed">
										
									</p>
								</div>
							</div>
						</div>

						<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 px-7 py-6">
							<div className="flex items-start gap-4">
								<Car className="h-6 w-6 shrink-0 text-teal-300/80 mt-0.5" />
								<div>
									<h3 className="text-lg font-bold text-white tracking-tight mb-1">
										By Car
									</h3>
									<p className="text-sm sm:text-base text-white/55 leading-relaxed">
										
									</p>
								</div>
							</div>
						</div>

						<Link
							href={DIRECTIONS_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-1 text-sm font-medium text-teal-300/90 hover:text-teal-200 transition-colors"
						>
							Official directions and campus map
							<ExternalLink className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
