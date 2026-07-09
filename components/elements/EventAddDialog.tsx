'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Event as EventType } from '@/types/app.types';
import { eventSchema, type EventFormData } from '@/actions/schemas';
import { addEvent, updateEvent } from '@/actions/events';
import { toast } from 'sonner';

interface EventDialogProps {
	event?: EventType;
	onEventUpdate?: (event: EventType) => void;
	trigger?: React.ReactNode;
}

const defaultEvent: EventFormData = {
	event_type: '',
	title: '',
	desc: '',
	start_date: '',
	end_date: '',
	link: '',
	youtube_video_id: '',
	city: '',
	state: '',
	country: '',
};

export function EventDialog({
	event,
	onEventUpdate,
	trigger,
}: EventDialogProps) {
	const [open, setOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<EventFormData>({
		resolver: zodResolver(eventSchema),
		defaultValues: event
			? {
					...defaultEvent,
					event_type: event.event_type,
					title: event.title,
					desc: event.desc,
					start_date: event.start_date,
					end_date: event.end_date,
					link: event.link || '',
					youtube_video_id: event.youtube_video_id,
					city: event.city,
					state: event.state,
					country: event.country,
				}
			: defaultEvent,
	});

	const onSubmit = async (data: EventFormData) => {
		setIsSubmitting(true);

		try {
			// Use updateEvent if editing, addEvent if creating
			const result = event
				? await updateEvent(event.id, data)
				: await addEvent(data);

			if (result.success) {
				// Close dialog and notify parent
				setOpen(false);
				onEventUpdate?.(result.data as EventType);
				form.reset();
				toast.success(
					event ? 'Event updated successfully' : 'Event created successfully'
				);
			} else {
				// Handle server errors
				if (result.errors) {
					// Set field-specific errors from server
					Object.entries(result.errors).forEach(([field, message]) => {
						form.setError(field as keyof EventFormData, {
							type: 'server',
							message: message as string,
						});
					});
				}
				// Set general error if no specific field errors
				if (result.message && !result.errors) {
					form.setError('root', {
						type: 'server',
						message: result.message,
					});
				}
				toast.error(
					event ? 'Failed to update event' : 'Failed to create event'
				);
			}
		} catch (error) {
			// Handle network/unexpected errors
			form.setError('root', {
				type: 'server',
				message: 'An unexpected error occurred',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	// Reset form when dialog closes
	const handleOpenChange = (newOpen: boolean) => {
		setOpen(newOpen);
		if (!newOpen) {
			form.reset();
			form.clearErrors();
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				{trigger || (
					<Button className="rounded-full" variant="default">
						{event ? 'Edit Event' : 'Create Event'}
					</Button>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogHeader>
						<DialogTitle>
							{event ? 'Edit Event' : 'Create New Event'}
						</DialogTitle>
						<DialogDescription>
							{event
								? 'Make changes to your event here.'
								: 'Fill in the details for your new event and click create event when ready.'}
						</DialogDescription>
					</DialogHeader>

					{/* General error message */}
					{form.formState.errors.root && (
						<div className="rounded-md bg-red-50 p-3 mb-4">
							<div className="text-red-800 text-sm">
								{form.formState.errors.root.message}
							</div>
						</div>
					)}

					<div className="grid gap-4 py-4">
						{/* Event Type */}
						<div className="grid gap-3">
							<Label htmlFor="event_type">Event Type</Label>
							<RadioGroup
								defaultValue={form.getValues('event_type')}
								className="flex items-center flex-wrap gap-4"
								onValueChange={(value) => form.setValue('event_type', value)}
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="datathon" id="datathon" />
									<Label htmlFor="datathon">Datathon</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="workshop" id="workshop" />
									<Label htmlFor="workshop">Workshop</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="symposium" id="symposium" />
									<Label htmlFor="symposium">Symposium</Label>
								</div>
							</RadioGroup>
							{form.formState.errors.event_type && (
								<span className="text-red-500 text-sm">
									{form.formState.errors.event_type.message}
								</span>
							)}
						</div>

						{/* Title */}
						<div className="grid gap-3">
							<Label htmlFor="title">Title</Label>
							<Input
								id="title"
								{...form.register('title')}
								className={
									form.formState.errors.title
										? 'border-red-500 focus:border-red-500'
										: ''
								}
							/>
							{form.formState.errors.title && (
								<span className="text-red-500 text-sm">
									{form.formState.errors.title.message}
								</span>
							)}
						</div>

						{/* Description */}
						<div className="grid gap-3">
							<Label htmlFor="desc">Description</Label>
							<Textarea
								id="desc"
								{...form.register('desc')}
								rows={3}
								className={
									form.formState.errors.desc
										? 'border-red-500 focus:border-red-500'
										: ''
								}
							/>
							{form.formState.errors.desc && (
								<span className="text-red-500 text-sm">
									{form.formState.errors.desc.message}
								</span>
							)}
						</div>

						{/* Dates */}
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-3">
								<Label htmlFor="start_date">Start Date</Label>
								<Input
									id="start_date"
									type="date"
									{...form.register('start_date')}
									className={
										form.formState.errors.start_date
											? 'border-red-500 focus:border-red-500'
											: ''
									}
								/>
								{form.formState.errors.start_date && (
									<span className="text-red-500 text-sm">
										{form.formState.errors.start_date.message}
									</span>
								)}
							</div>

							<div className="grid gap-3">
								<Label htmlFor="end_date">End Date</Label>
								<Input
									id="end_date"
									type="date"
									{...form.register('end_date')}
									className={
										form.formState.errors.end_date
											? 'border-red-500 focus:border-red-500'
											: ''
									}
								/>
								{form.formState.errors.end_date && (
									<span className="text-red-500 text-sm">
										{form.formState.errors.end_date.message}
									</span>
								)}
							</div>
						</div>

						{/* Location */}
						<div className="grid grid-cols-3 gap-4">
							<div className="grid gap-3">
								<Label htmlFor="city">City</Label>
								<Input
									id="city"
									{...form.register('city')}
									className={
										form.formState.errors.city
											? 'border-red-500 focus:border-red-500'
											: ''
									}
								/>
								{form.formState.errors.city && (
									<span className="text-red-500 text-sm">
										{form.formState.errors.city.message}
									</span>
								)}
							</div>

							<div className="grid gap-3">
								<Label htmlFor="state">State</Label>
								<Input
									id="state"
									{...form.register('state')}
									className={
										form.formState.errors.state
											? 'border-red-500 focus:border-red-500'
											: ''
									}
								/>
								{form.formState.errors.state && (
									<span className="text-red-500 text-sm">
										{form.formState.errors.state.message}
									</span>
								)}
							</div>

							<div className="grid gap-3">
								<Label htmlFor="country">Country</Label>
								<Input
									id="country"
									{...form.register('country')}
									className={
										form.formState.errors.country
											? 'border-red-500 focus:border-red-500'
											: ''
									}
								/>
								{form.formState.errors.country && (
									<span className="text-red-500 text-sm">
										{form.formState.errors.country.message}
									</span>
								)}
							</div>
						</div>

						{/* Link */}
						<div className="grid gap-3">
							<Label htmlFor="link">Event Link (optional)</Label>
							<Input
								id="link"
								type="url"
								placeholder="https://example.com"
								{...form.register('link')}
								className={
									form.formState.errors.link
										? 'border-red-500 focus:border-red-500'
										: ''
								}
							/>
							{form.formState.errors.link && (
								<span className="text-red-500 text-sm">
									{form.formState.errors.link.message}
								</span>
							)}
						</div>

						{/* YouTube Video ID */}
						<div className="grid gap-3">
							<Label htmlFor="youtube_video_id">
								YouTube Video ID (optional)
							</Label>
							<Input
								id="youtube_video_id"
								placeholder="dQw4w9WgXcQ"
								{...form.register('youtube_video_id')}
							/>
							<span className="text-gray-500 text-sm">
								Enter just the video ID from the YouTube URL
							</span>
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" type="button">
								Cancel
							</Button>
						</DialogClose>
						<Button type="submit" disabled={isSubmitting}>
							{isSubmitting
								? 'Saving...'
								: event
									? 'Update Event'
									: 'Create Event'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
