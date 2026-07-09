import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Event } from '@/types/app.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TruncateText from '@/components/primitives/truncate-text';
import { cn } from '@/lib/utils';
import { CalendarDays, ArrowUpRight } from 'lucide-react';

export default function EventCard({ event }: { event: Event }) {
	const isCompleted = () => {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Reset time to start of day
		const eventEndDate = new Date(event.end_date);
		eventEndDate.setHours(0, 0, 0, 0); // Reset time to start of day
		return eventEndDate < today;
	};

	const startDate = new Date(event.start_date);
	const endDate = new Date(event.end_date);
	const eventLink = event.link?.trim() ?? '';
	const isExternalLink =
		eventLink.startsWith('http://') || eventLink.startsWith('https://');

	// Format date range string
	const dateRange =
		startDate.getTime() === endDate.getTime()
			? startDate.toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					year: 'numeric',
			  })
			: `${startDate.toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
			  })} - ${endDate.toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					year: 'numeric',
			  })}`;

	return (
		<Card className="group overflow-hidden h-full border-border bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
			{/* Subtle visual accent gradient on hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

			<CardContent className="p-6 flex flex-col h-full gap-5 relative z-10">
				<div className="flex gap-4 items-start">
					{/* Date Box Visual */}
					<div className="flex flex-col items-center justify-center bg-muted/40 rounded-xl p-2.5 min-w-[4rem] border border-border/50 text-center shrink-0 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
						<span className="text-[0.65rem] font-bold uppercase text-muted-foreground tracking-wider mb-0.5">
							{startDate.toLocaleDateString('en-US', { month: 'short' })}
						</span>
						<span className="text-2xl font-bold text-foreground leading-none">
							{startDate.getDate()}
						</span>
					</div>

					<div className="space-y-2 flex-1">
						<div className="flex justify-between items-start gap-2">
							<Badge
								variant="secondary"
								className={cn(
									'uppercase tracking-widest text-[10px] font-semibold py-0.5 px-2 rounded-full border-0',
									isCompleted()
										? 'bg-muted text-muted-foreground'
										: 'bg-primary/10 text-primary'
								)}
							>
								{isCompleted() ? 'Completed' : 'Upcoming'}
							</Badge>
						</div>
						<h3 className="text-xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
							{event.title}
						</h3>
					</div>
				</div>

				{/* Metadata Row */}
				<div className="flex items-center gap-4 text-xs font-medium text-muted-foreground border-y border-border/40 py-3">
					<div className="flex items-center gap-1.5">
						<CalendarDays className="w-3.5 h-3.5" />
						<span>{dateRange}</span>
					</div>
					{/* Placeholder for time or location if available in future, or just spacing */}
				</div>

				<div className="flex-1">
					<TruncateText
						text={event.desc || 'No description available.'}
						className="text-sm text-muted-foreground leading-relaxed"
						expandTextColor="text-primary font-medium"
					/>
				</div>

				{eventLink && (
					<Link
						href={eventLink}
						target={isExternalLink ? '_blank' : undefined}
						rel={isExternalLink ? 'noopener noreferrer' : undefined}
						className="mt-2 block"
					>
						<Button
							variant="outline"
							className="w-full group/btn justify-between hover:border-primary/50 hover:text-primary hover:bg-primary/5"
						>
							View Details
							<ArrowUpRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
						</Button>
					</Link>
				)}
			</CardContent>
		</Card>
	);
}
