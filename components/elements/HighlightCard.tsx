import { ExternalLink, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TruncateText from '@/components/primitives/truncate-text';
import Link from 'next/link';
import { Highlight } from '@/types/app.types';
import LazyIframe from '@/components/primitives/lazy-iframe';

export default function HighlightCard({
	highlight,
	isFeatured = false,
}: {
	highlight: Highlight;
	isFeatured?: boolean;
}) {
	// Helper to display categories
	const categories = highlight.categories || [];
	const displayCategories = categories.slice(0, 3); // Limit to 3 tags to avoid clutter
	const remainingCount = categories.length - 3;

	// Video Card Design
	if (highlight.type === 'video' && highlight.video_url) {
		return (
			<div className="group overflow-hidden rounded-xl bg-card border border-border/50 hover:border-border transition-colors duration-300 h-full flex flex-col">
				<div className="relative aspect-video w-full bg-muted">
					<LazyIframe
						title={highlight.title}
						url={highlight.video_url}
						className="w-full h-full object-cover"
					/>
					{/* Location Badge Overlay */}
					{highlight.location && (
						<div className="absolute top-3 left-3 z-10">
							<Badge variant="secondary" className="bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border-0 font-normal">
								{highlight.location}
							</Badge>
						</div>
					)}
				</div>
				
				<div className="p-4 flex-1 flex flex-col">
					<div className="flex flex-wrap items-center gap-2 mb-3">
						{displayCategories.map((cat) => (
							<Badge 
								key={cat} 
								variant="outline" 
								className="text-[10px] font-medium text-red-500 border-red-500/20 bg-red-500/10"
							>
								{cat}
							</Badge>
						))}
						{remainingCount > 0 && (
							<span className="text-[10px] text-muted-foreground">+{remainingCount}</span>
						)}
					</div>

					<h3 className="text-base font-semibold text-card-foreground mb-2 leading-snug group-hover:text-red-500 transition-colors">
						{highlight.title}
					</h3>
					{highlight.description && (
						<div className="mt-2">
							<TruncateText
								text={highlight.description}
								length={100}
								color="text-muted-foreground text-sm leading-relaxed"
								expandText="More"
								collapseText="Less"
								expandTextColor="text-foreground font-medium"
							/>
						</div>
					)}
				</div>
			</div>
		);
	}

	// Link/Resource Card Design
	return (
		<div className="group overflow-hidden rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300 h-full flex flex-col relative hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
			<div className="p-5 flex-1 flex flex-col">
				<div className="flex items-center justify-between gap-3 mb-4">
					<div className="flex flex-wrap gap-2">
						{displayCategories.map((cat) => (
							<Badge
								key={cat}
								variant="outline"
								className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground border-border"
							>
								{cat}
							</Badge>
						))}
						{remainingCount > 0 && (
							<span className="text-[10px] text-muted-foreground font-medium">+{remainingCount}</span>
						)}
					</div>
					{highlight.created_at && (
						<span className="text-[10px] text-muted-foreground font-medium opacity-60 whitespace-nowrap">
							{new Date(highlight.created_at).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short',
							})}
						</span>
					)}
				</div>

				<Link href={highlight.link || '#'} target="_blank" rel="noopener noreferrer" className="block mb-3">
					<h3 className="text-lg font-semibold text-card-foreground leading-snug group-hover:text-red-500 transition-colors">
						{highlight.title}
					</h3>
				</Link>

				<div className="mb-6 flex-1">
					<TruncateText
						text={highlight.description || ''}
						length={140}
						color="text-muted-foreground text-sm leading-relaxed"
						expandText="More"
						collapseText="Less"
						expandTextColor="text-foreground font-medium"
					/>
				</div>

				{highlight.link && (
					<Link href={highlight.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
						<Button
							variant="secondary"
							className="w-full justify-between bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors rounded-lg h-10 px-4 text-sm font-medium"
						>
							<span>Open Resource</span>
							<ExternalLink className="h-3.5 w-3.5 opacity-70" />
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
