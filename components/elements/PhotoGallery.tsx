'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Expand, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryPhoto {
	src: string;
	alt: string;
	/** Extra classes for this tile, e.g. col-span/row-span for mosaic layouts */
	span?: string;
	/** object-position class for the tile crop, e.g. 'object-[center_70%]' */
	position?: string;
}

export default function PhotoGallery({
	photos,
	className,
	itemClassName,
}: {
	photos: GalleryPhoto[];
	className?: string;
	itemClassName?: string;
}) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const active = activeIndex !== null ? photos[activeIndex] : null;

	const showPrev = useCallback(
		() =>
			setActiveIndex((i) =>
				i === null ? i : (i + photos.length - 1) % photos.length
			),
		[photos.length]
	);
	const showNext = useCallback(
		() => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
		[photos.length]
	);

	return (
		<>
			<div className={className}>
				{photos.map((photo, index) => (
					<button
						key={photo.src}
						type="button"
						onClick={() => setActiveIndex(index)}
						className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-teal-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-all duration-300 cursor-zoom-in ${itemClassName ?? 'aspect-[4/3]'} ${photo.span ?? ''}`}
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							sizes="(max-width: 1024px) 50vw, 33vw"
							className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${photo.position ?? ''}`}
						/>
						{/* Subtle at rest so the photo itself stays visible; darkens
						    only on hover, when the caption needs contrast to read */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-20 group-hover:opacity-90 transition-opacity duration-300" />
						<span className="absolute bottom-3 left-4 right-12 text-left text-xs sm:text-sm font-medium text-white/85 leading-snug drop-shadow-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
							{photo.alt}
						</span>
						<span className="absolute bottom-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<Expand className="h-4 w-4" />
						</span>
					</button>
				))}
			</div>

			<Dialog
				open={active !== null}
				onOpenChange={(open) => !open && setActiveIndex(null)}
			>
				<DialogContent
					className="max-w-5xl w-[calc(100vw-2rem)] border-white/10 bg-black/95 p-2 sm:p-3"
					onKeyDown={(e) => {
						if (e.key === 'ArrowLeft') showPrev();
						if (e.key === 'ArrowRight') showNext();
					}}
				>
					{active && (
						<>
							<DialogTitle className="sr-only">{active.alt}</DialogTitle>
							<div className="relative w-full max-h-[80vh] overflow-hidden rounded-xl">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={active.src}
									alt={active.alt}
									className="w-full h-auto max-h-[80vh] object-contain"
								/>

								{photos.length > 1 && (
									<>
										<button
											type="button"
											onClick={showPrev}
											aria-label="Previous photo"
											className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-black/85 hover:border-teal-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-all"
										>
											<ChevronLeft className="h-6 w-6" />
										</button>
										<button
											type="button"
											onClick={showNext}
											aria-label="Next photo"
											className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-black/85 hover:border-teal-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-all"
										>
											<ChevronRight className="h-6 w-6" />
										</button>
									</>
								)}
							</div>
							<div className="flex items-center justify-between gap-4 px-2 pb-1 pt-2">
								<p className="text-sm text-white/60">{active.alt}</p>
								{photos.length > 1 && (
									<span className="shrink-0 font-mono text-xs text-white/40">
										{(activeIndex ?? 0) + 1} / {photos.length}
									</span>
								)}
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}
