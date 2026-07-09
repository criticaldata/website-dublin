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
import { Highlight } from '@/types/app.types';
import { deleteHighlight } from '@/actions/highlights';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface HighlightDeleteDialogProps {
	highlight: Highlight;
	onHighlightDeleted?: (highlightId: string) => void;
	trigger: React.ReactNode;
}

export function HighlightDeleteDialog({
	highlight,
	onHighlightDeleted,
	trigger,
}: HighlightDeleteDialogProps) {
	const [open, setOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async () => {
		setIsDeleting(true);

		try {
			const result = await deleteHighlight(highlight.id);

			if (result.success) {
				setOpen(false);
				onHighlightDeleted?.(highlight.id);
				toast.success('Highlight deleted successfully');
			} else {
				toast.error(result.message || 'Failed to delete highlight');
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
					<DialogTitle>Delete Highlight</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this highlight? This action cannot
						be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="rounded-lg bg-muted/50 p-4 my-4">
					<h3 className="font-semibold text-sm mb-1">Highlight Details:</h3>
					<p className="text-sm font-medium">{highlight.title}</p>
					<p className="text-xs text-muted-foreground mt-1">
						Category: {highlight.categories?.join(', ')}
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
						{isDeleting ? 'Deleting...' : 'Delete Highlight'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

