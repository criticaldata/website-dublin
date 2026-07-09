import { Highlight } from '@/types/app.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import LazyIframe from '@/components/primitives/lazy-iframe';
import TruncateText from '@/components/primitives/truncate-text';

interface FeaturedHighlightProps {
	highlight: Highlight;
}

export function FeaturedHighlight({ highlight }: FeaturedHighlightProps) {
	const isVideo = highlight.type === 'video' && highlight.video_url;

	return (
		<div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 via-red-500/5 to-background shadow-xl hover:shadow-2xl hover:border-red-500/40 transition-all duration-300">
			{/* Decorative "Featured" Badge */}
			<div className="absolute top-0 right-0 z-10">
				<div className="bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
					<Star className="w-3.5 h-3.5 fill-current" />
					FEATURED
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
				{/* Content Section */}
				<div className="p-6 sm:p-8 flex flex-col justify-center order-2 lg:order-1">
					<div className="space-y-4">
						{/* Categories */}
						<div className="flex flex-wrap gap-2">
							{highlight.categories.map((cat) => (
								<Badge 
									key={cat} 
									variant="secondary" 
									className="bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors border-transparent"
								>
									{cat}
								</Badge>
							))}
						</div>

						{/* Title */}
						<Link href={highlight.link || '#'} target="_blank" className="block group">
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-red-500 transition-colors">
								{highlight.title}
							</h2>
						</Link>

						{/* Meta Info */}
						{highlight.created_at && (
							<div className="flex items-center text-sm text-muted-foreground">
								<Calendar className="w-4 h-4 mr-2" />
								{new Date(highlight.created_at).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
								{highlight.location && (
									<>
										<span className="mx-2">•</span>
										<span>{highlight.location}</span>
									</>
								)}
							</div>
						)}

						{/* Description */}
						{highlight.description && (
							<div className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								<TruncateText
									text={highlight.description}
									length={300}
									color="text-muted-foreground"
									expandText="Read full description"
									collapseText="Show less"
									expandTextColor="text-red-500 font-medium ml-1"
								/>
							</div>
						)}

						{/* Action Button */}
						{highlight.link && !isVideo && (
							<div className="pt-4">
								<Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all bg-red-500 hover:bg-red-600 text-white border-none">
									<Link href={highlight.link} target="_blank">
										Open Resource
										<ExternalLink className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						)}
					</div>
				</div>

				{/* Media Section */}
				<div className="relative min-h-[300px] lg:min-h-full bg-muted/50 order-1 lg:order-2 overflow-hidden flex items-center justify-center">
					{isVideo ? (
						<div className="w-full h-full absolute inset-0">
							<LazyIframe
								title={highlight.title}
								url={highlight.video_url!}
								className="w-full h-full object-cover"
							/>
						</div>
					) : (
						<div className="w-full h-full p-8 flex items-center justify-center bg-gradient-to-br from-red-500/5 to-muted/50">
							<div className="text-center space-y-4 max-w-sm">
								<div className="w-20 h-20 bg-background rounded-2xl shadow-lg mx-auto flex items-center justify-center group-hover:text-red-500 transition-colors">
									<ExternalLink className="w-10 h-10 text-red-500/60" />
								</div>
								<p className="text-muted-foreground font-medium">
									View this resource directly by clicking the link
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
