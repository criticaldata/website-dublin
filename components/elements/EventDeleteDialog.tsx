'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Event } from '@/types/app.types';
import { deleteEvent } from '@/actions/events';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface EventDeleteDialogProps {
	event: Event;
	onEventDeleted?: (eventId: string) => void;
	trigger: React.ReactNode;
}

export function EventDeleteDialog({
	event,
	onEventDeleted,
	trigger,
}: EventDeleteDialogProps) {
	const [open, setOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async () => {
		setIsDeleting(true);

		try {
			const result = await deleteEvent(event.id);

			if (result.success) {
				setOpen(false);
				onEventDeleted?.(event.id);
				toast.success('Event deleted successfully');
			} else {
				toast.error(result.message || 'Failed to delete event');
			}
		} catch (error) {
			toast.error('An unexpected error occurred');
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Delete Event</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this event? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="rounded-lg bg-muted/50 p-4 my-4">
					<h3 className="font-semibold text-sm mb-1">Event Details:</h3>
					<p className="text-sm font-medium">{event.title}</p>
					<p className="text-xs text-muted-foreground mt-1">
						{new Date(event.start_date).toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
						})}{' '}
						-{' '}
						{new Date(event.end_date).toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
						})}
					</p>
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline" disabled={isDeleting}>
							Cancel
						</Button>
					</DialogClose>
					<Button
						variant="destructive"
						onClick={handleDelete}
						disabled={isDeleting}
					>
						{isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						{isDeleting ? 'Deleting...' : 'Delete Event'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
