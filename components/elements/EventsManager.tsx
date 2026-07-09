'use client';
import { useState, useEffect } from 'react';
import { getEvents } from '@/actions/events';
import { Event } from '@/types/app.types';
import Spinner from '@/components/primitives/spinner';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/elements/EventCard';
import { EventDialog } from '@/components/elements/EventAddDialog';
import { EventDeleteDialog } from '@/components/elements/EventDeleteDialog';
import TestimonialsGrid from '@/components/elements/TestimonialsGrid';
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react';

interface EventsManagerProps {
	isAdmin?: boolean;
	showHeader?: boolean;
}

type Tab = 'upcoming' | 'past';

export default function EventsManager({
	isAdmin = false,
	showHeader = true,
}: EventsManagerProps) {
	const [events, setEvents] = useState<Event[]>([]);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState<Tab>('upcoming');

	useEffect(() => {
		fetchEvents();
	}, []);

	const fetchEvents = async () => {
		const _events = await getEvents();
		setEvents(_events);
		setLoading(false);
	};

	const handleEventUpdate = (newEvent: Event) => {
		// Refresh events list after adding/editing an event
		fetchEvents();
	};

	const handleEventDeleted = (eventId: string) => {
		// Refresh events list after deleting an event
		fetchEvents();
	};

	const isEventCompleted = (endDate: string): boolean => {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Reset time to start of day
		const eventEndDate = new Date(endDate);
		eventEndDate.setHours(0, 0, 0, 0); // Reset time to start of day
		return eventEndDate < today;
	};

	const isCuratedEvent = (event: Event) => event.id.startsWith('curated-');

	const filteredEvents = events.filter((event) => {
		if (activeTab === 'upcoming') return !isEventCompleted(event.end_date);
		if (activeTab === 'past') return isEventCompleted(event.end_date);
		return false;
	});

	return (
		<div className="space-y-16">
			{/* Header Section */}
			<div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end border-b border-border pb-8">
				{showHeader && (
					<div className="space-y-4 max-w-2xl">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
							Events
						</h1>
						<div className="text-lg leading-8 text-muted-foreground">
							We host a range of events, building a global community at the
							forefront of AI in Health.
						</div>
					</div>
				)}

				<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
					<div className="flex items-center p-1 bg-muted/50 rounded-full border border-border">
						<button
							onClick={() => setActiveTab('upcoming')}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
								activeTab === 'upcoming'
									? 'bg-background shadow-sm text-foreground'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Upcoming
						</button>
						<button
							onClick={() => setActiveTab('past')}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
								activeTab === 'past'
									? 'bg-background shadow-sm text-foreground'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Past Events
						</button>
					</div>

					{isAdmin && (
						<EventDialog
							onEventUpdate={handleEventUpdate}
							trigger={
								<Button className="rounded-full" variant="default" size="sm">
									<PlusIcon className="w-4 h-4 mr-2" />
									Add Event
								</Button>
							}
						/>
					)}
				</div>
			</div>

			{/* Events Grid */}
			<div>
				{loading && (
					<div className="flex justify-center py-12">
						<Spinner />
					</div>
				)}

				{!loading && filteredEvents.length === 0 && (
					<div className="text-center py-12 bg-muted/20 rounded-2xl border border-dashed border-border">
						<p className="text-lg text-muted-foreground">
							{activeTab === 'past'
								? 'No past events found.'
								: 'No upcoming events scheduled at the moment.'}
						</p>
					</div>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredEvents.map((event) => (
						<div key={event.id} className="relative group">
							<EventCard event={event} />
							{isAdmin && !isCuratedEvent(event) && (
								<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
									<EventDialog
										event={event}
										onEventUpdate={handleEventUpdate}
										trigger={
											<Button
												size="sm"
												variant="secondary"
												className="h-8 w-8 p-0 rounded-full shadow-sm"
											>
												<PencilIcon className="w-4 h-4" />
											</Button>
										}
									/>
									<EventDeleteDialog
										event={event}
										onEventDeleted={handleEventDeleted}
										trigger={
											<Button
												size="sm"
												variant="destructive"
												className="h-8 w-8 p-0 rounded-full shadow-sm"
											>
												<TrashIcon className="w-4 h-4" />
											</Button>
										}
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="border-t border-border pt-16">
				<div className="max-w-7xl mx-auto">
					<TestimonialsGrid />
				</div>
			</div>
		</div>
	);
}
