import Link from 'next/link';
import { MapPin, TrainFront, Car, ExternalLink } from 'lucide-react';

const DIRECTIONS_URL =
	'https://www.tuh.ie/Departments/Centre-for-Learning-Development/Map-Directions.html';

export default function Venue() {
	return (
		<section
			id="venue"
			className="relative bg-black/60 py-24 sm:py-32 overflow-hidden"
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

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-4xl mb-14">
					In the heart of{' '}
					<span className="italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
						Dublin healthcare.
					</span>
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
					<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 px-7 py-8">
						<MapPin className="h-6 w-6 text-teal-300/80 mb-4" />
						<h3 className="text-lg font-bold text-white tracking-tight mb-2">
							The Venue
						</h3>
						<p className="text-sm sm:text-base text-white/55 leading-relaxed">
							Centre for Learning and Development,
							<br />
							Tallaght University Hospital,
							<br />
							Dublin, Ireland.
						</p>
					</div>

					<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 px-7 py-8">
						<TrainFront className="h-6 w-6 text-teal-300/80 mb-4" />
						<h3 className="text-lg font-bold text-white tracking-tight mb-2">
							By Luas
						</h3>
						<p className="text-sm sm:text-base text-white/55 leading-relaxed">
							Easily accessible via the Luas Red Line from Dublin City Centre.
							Exit at the Tallaght Stop — approximately a five-minute walk from
							the hospital.
						</p>
					</div>

					<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-teal-400/30 transition-all duration-300 px-7 py-8">
						<Car className="h-6 w-6 text-teal-300/80 mb-4" />
						<h3 className="text-lg font-bold text-white tracking-tight mb-2">
							By Car
						</h3>
						<p className="text-sm sm:text-base text-white/55 leading-relaxed">
							Public parking is available on the hospital campus.
						</p>
					</div>
				</div>

				<Link
					href={DIRECTIONS_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-300/90 hover:text-teal-200 transition-colors"
				>
					Directions and campus map
					<ExternalLink className="h-4 w-4" />
				</Link>
			</div>
		</section>
	);
}
