'use client';

import { useState, useEffect } from 'react';
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
import { Highlight } from '@/types/app.types';
import { highlightSchema, type HighlightFormData } from '@/actions/schemas';
import { addHighlight, updateHighlight } from '@/actions/highlights';
import { toast } from 'sonner';

interface HighlightDialogProps {
	highlight?: Highlight;
	onHighlightUpdate?: (highlight: Highlight) => void;
	trigger?: React.ReactNode;
}

const defaultHighlight: HighlightFormData = {
	title: '',
	description: '',
	link: '',
	category: '',
};

export function HighlightDialog({
	highlight,
	onHighlightUpdate,
	trigger,
}: HighlightDialogProps) {
	const [open, setOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<HighlightFormData>({
		resolver: zodResolver(highlightSchema),
		defaultValues: highlight
			? {
					title: highlight.title,
					description: highlight.description || '',
					link: highlight.link || '',
					// Join categories array back to string for editing
					category: highlight.categories ? highlight.categories.join(', ') : '',
				}
			: defaultHighlight,
	});

	// Update form values when dialog opens with updated highlight data
	useEffect(() => {
		if (open && highlight) {
			form.reset({
				title: highlight.title,
				description: highlight.description || '',
				link: highlight.link || '',
				// Join categories array back to string for editing
				category: highlight.categories ? highlight.categories.join(', ') : '',
			});
		} else if (open && !highlight) {
			form.reset(defaultHighlight);
		}
	}, [open, highlight, form]);

	const onSubmit = async (data: HighlightFormData) => {
		setIsSubmitting(true);

		try {
			// Use updateHighlight if editing, addHighlight if creating
			const result = highlight
				? await updateHighlight(highlight.id, data)
				: await addHighlight(data);

			if (result.success) {
				// Close dialog and notify parent
				setOpen(false);
				// We need to fetch the fresh highlight properly in parent or cast carefully
				// For now, parent re-fetches so this is fine.
				// But onHighlightUpdate expects Highlight which has categories[]
				// The result.data from actions is raw DB data (category string)
				// We should ideally return the transformed data from action or just let parent re-fetch.
				// Since parent does `fetchHighlights()` on update, passing result.data is just for convenience/optimistic update if we used it.
				// But `handleHighlightUpdate` in parent just calls `fetchHighlights`.
				
				onHighlightUpdate?.(result.data as unknown as Highlight); 
				form.reset();
				toast.success(
					highlight
						? 'Highlight updated successfully'
						: 'Highlight created successfully'
				);
			} else {
				// Handle server errors
				if (result.errors) {
					// Set field-specific errors from server
					Object.entries(result.errors).forEach(([field, message]) => {
						form.setError(field as keyof HighlightFormData, {
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
					highlight ? 'Failed to update highlight' : 'Failed to create highlight'
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
						{highlight ? 'Edit Highlight' : 'Create Highlight'}
					</Button>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogHeader>
						<DialogTitle>
							{highlight ? 'Edit Highlight' : 'Create New Highlight'}
						</DialogTitle>
						<DialogDescription>
							{highlight
								? 'Make changes to your highlight here.'
								: 'Fill in the details for your new highlight and click create when ready.'}
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

						{/* Category */}
						<div className="grid gap-3">
							<Label htmlFor="category">Categories</Label>
							<Input
								id="category"
								placeholder="e.g., Paper, Book, Tool (comma separated)"
								{...form.register('category')}
								className={
									form.formState.errors.category
										? 'border-red-500 focus:border-red-500'
										: ''
								}
							/>
							<span className="text-xs text-muted-foreground">Separate multiple categories with commas</span>
							{form.formState.errors.category && (
								<span className="text-red-500 text-sm">
									{form.formState.errors.category.message}
								</span>
							)}
						</div>

						{/* Description */}
						<div className="grid gap-3">
							<Label htmlFor="description">Description <span className="text-muted-foreground font-normal">(Optional)</span></Label>
							<Textarea
								id="description"
								{...form.register('description')}
								rows={8}
								className={
									form.formState.errors.description
										? 'border-red-500 focus:border-red-500'
										: ''
								}
							/>
							{form.formState.errors.description && (
								<span className="text-red-500 text-sm">
									{form.formState.errors.description.message}
								</span>
							)}
							<span className="text-gray-500 text-sm">
								{form.watch('description')?.length || 0} / 5000 characters
							</span>
						</div>

						{/* Link */}
						<div className="grid gap-3">
							<Label htmlFor="link">Link</Label>
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
								: highlight
									? 'Update Highlight'
									: 'Create Highlight'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
