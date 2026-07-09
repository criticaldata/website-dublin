import { z } from 'zod';

export const eventSchema = z
	.object({
		event_type: z.string().min(1, 'Event type is required'),
		title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
		desc: z
			.string()
			.min(1, 'Description is required')
			.max(1000, 'Description too long'),
		start_date: z.string().min(1, 'Start date is required'),
		end_date: z.string().min(1, 'End date is required'),
		link: z.string().url('Must be a valid URL').or(z.string().length(0)),
		youtube_video_id: z.string().optional(),
		city: z.string().min(1, 'City is required'),
		state: z.string().min(1, 'State is required'),
		country: z.string().min(1, 'Country is required'),
	})
	.refine(
		(data) => {
			// Validate that end_date is after start_date
			return new Date(data.end_date) >= new Date(data.start_date);
		},
		{
			message: 'End date must be after start date',
			path: ['end_date'],
		}
	);

export type EventFormData = z.infer<typeof eventSchema>;

export const highlightSchema = z.object({
	title: z
		.string()
		.min(1, 'Title is required')
		.max(300, 'Title is too long (max 300 characters)'),
	description: z
		.string()
		.max(5000, 'Description is too long (max 5000 characters)')
		.optional()
		.or(z.literal('')),
	link: z.string().url('Must be a valid URL').or(z.string().length(0)),
	category: z.string().min(1, 'Category is required'), // Keep singular for form input, will process later
});

export type HighlightFormData = z.infer<typeof highlightSchema>;
