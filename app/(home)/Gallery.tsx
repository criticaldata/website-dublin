import PhotoGallery from '@/components/elements/PhotoGallery';
import { galleryPhotos } from '@/lib/dublink-photos';

export default function Gallery() {
	return (
		<section
			id="gallery"
			className="scroll-mt-16 relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Photos
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-white leading-[1.05] max-w-4xl mb-14">
					The day,{' '}
					<span className="italic inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent pr-2">
						in pictures.
					</span>
				</h2>

				{/* Tiles load the small thumbs; click any photo to open it full size */}
				<PhotoGallery
					photos={galleryPhotos}
					className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
					itemClassName="aspect-[3/2]"
				/>

				<p className="mt-8 text-xs sm:text-sm text-white/40">
					Photo credit: Tamás Tiszai-Szűcs, Ezi Ozoani, Ahmad Albarqawi and
					Sebastián Cajas.
				</p>
			</div>
		</section>
	);
}
