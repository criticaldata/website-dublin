import Image from 'next/image';

interface TestimonialsGridProps {
	images?: string[];
}

const DEFAULT_IMAGES = [
	'/testimonials/boya_zhang.jpeg',
	'/testimonials/davide_giordano_1.jpeg',
	'/testimonials/davide_giordano_2.jpeg',
	'/testimonials/hector_acevedo.jpeg',
	'/testimonials/mena_ramos_1.png',
	'/testimonials/mena_ramos_2.png',
	'/testimonials/midori_kondo_1.png',
	'/testimonials/midori_kondo_2.png',
	'/testimonials/rahul_gorijavolu.png',
	'/testimonials/rogers_mwavu.jpeg',
];

export default function TestimonialsGrid({
	images = DEFAULT_IMAGES,
}: TestimonialsGridProps) {
	if (!images || images.length === 0) return null;

	return (
		<div className="space-y-8">
			<div className="flex flex-col items-center text-center space-y-4">
				<h2 className="text-4xl font-bold tracking-tight text-foreground">
					What people are saying
				</h2>
				<p className="text-muted-foreground max-w-2xl">
					Hear from our community members about their experiences at our events.
				</p>
			</div>

			<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
				{images.map((src, index) => (
					<div
						key={index}
						className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-muted/20 border border-border/50 hover:border-border transition-colors"
					>
						<div className="relative w-full">
							{/* Using standard img for simplicity with external assets or unknown dimensions. 
                                In production, Next/Image with blurDataURL or known sizes is better. */}
							<img
								src={src}
								alt={`Testimonial ${index + 1}`}
								className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
								loading="lazy"
							/>
							<div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-2xl pointer-events-none" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
