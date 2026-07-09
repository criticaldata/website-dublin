'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Expand } from 'lucide-react';

export interface GalleryPhoto {
	src: string;
	alt: string;
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
	const [active, setActive] = useState<GalleryPhoto | null>(null);

	return (
		<>
			<div className={className}>
				{photos.map((photo) => (
					<button
						key={photo.src}
						type="button"
						onClick={() => setActive(photo)}
						className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-teal-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-all duration-300 cursor-zoom-in ${itemClassName ?? 'aspect-[4/3]'}`}
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							sizes="(max-width: 1024px) 50vw, 33vw"
							className="object-cover group-hover:scale-110 transition-transform duration-500"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
						<span className="absolute bottom-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<Expand className="h-4 w-4" />
						</span>
					</button>
				))}
			</div>

			<Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
				<DialogContent className="max-w-5xl w-[calc(100vw-2rem)] border-white/10 bg-black/95 p-2 sm:p-3">
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
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}
