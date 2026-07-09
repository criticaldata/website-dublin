'use client';

import { useState, useEffect, useMemo } from 'react';
import { getHighlights, toggleFeaturedHighlight } from '@/actions/highlights';
import { Highlight } from '@/types/app.types';
import Spinner from '@/components/primitives/spinner';
import { Button } from '@/components/ui/button';
import HighlightCard from '@/components/elements/HighlightCard';
import { HighlightDialog } from '@/components/elements/HighlightAddDialog';
import { HighlightDeleteDialog } from '@/components/elements/HighlightDeleteDialog';
import { FeaturedHighlight } from '@/components/elements/FeaturedHighlight';
import { PlusIcon, PencilIcon, TrashIcon, StarIcon } from 'lucide-react';
import { FilterChips } from '@/components/primitives/filter-chips';

interface HighlightsManagerProps {
	isAdmin?: boolean;
	showHeader?: boolean;
}

export default function HighlightsManager({
	isAdmin = false,
	showHeader = true,
}: HighlightsManagerProps) {
	const [highlights, setHighlights] = useState<Highlight[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	useEffect(() => {
		fetchHighlights();
	}, []);

	const fetchHighlights = async () => {
		const dbHighlights = await getHighlights();
		
		// Map DB highlights to new structure
		const mappedDbHighlights: Highlight[] = dbHighlights.map(h => {
			let type: 'link' | 'video' = 'link';
			let video_url = undefined;

			// Check for YouTube Video
			const ytVideoMatch = h.link?.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
			// Check for YouTube Playlist
			const ytPlaylistMatch = h.link?.match(/[?&]list=([a-zA-Z0-9_-]+)/);

			if (ytPlaylistMatch) {
				type = 'video';
				video_url = `https://www.youtube.com/embed/videoseries?list=${ytPlaylistMatch[1]}`;
			} else if (ytVideoMatch) {
				type = 'video';
				video_url = `https://www.youtube.com/embed/${ytVideoMatch[1]}`;
			}

			return {
				...h,
				// Ensure we have categories
				categories: h.categories && h.categories.length > 0 ? h.categories : ['General'],
				type,
				video_url,
			};
		});

		// Sort by featured then date
		mappedDbHighlights.sort((a, b) => {
			if (a.featured && !b.featured) return -1;
			if (!a.featured && b.featured) return 1;
			return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
		});

		setHighlights(mappedDbHighlights);
		setLoading(false);
	};

	const handleFeaturedToggle = async (id: string, currentFeatured: boolean) => {
		await toggleFeaturedHighlight(id, !currentFeatured);
		fetchHighlights();
	};

	const handleHighlightUpdate = (newHighlight: Highlight) => {
		fetchHighlights();
	};

	const handleHighlightDeleted = (highlightId: string) => {
		fetchHighlights();
	};

	// Extract unique categories for filter
	const categories = useMemo(() => {
		const cats = new Map<string, string>(); // Use Map to store normalized -> original/display mapping
		// Default categories that should always appear if they exist
		const priorityCats = ['Paper', 'Event', 'Video'];
		
		highlights.forEach(h => {
			h.categories.forEach(c => {
				const normalized = c.toLowerCase();
				// Use Title Case for display if not already present
				// Or simply prefer the first casing encountered, or force Title Case
				if (!cats.has(normalized)) {
					// Capitalize first letter of each word for display
					const display = c.replace(/\b\w/g, l => l.toUpperCase());
					cats.set(normalized, display);
				}
			});
		});

		// Sort: Priority categories first, then alphabetical
		return Array.from(cats.values()).sort((a, b) => {
			const aPrio = priorityCats.indexOf(a);
			const bPrio = priorityCats.indexOf(b);
			if (aPrio !== -1 && bPrio !== -1) return aPrio - bPrio;
			if (aPrio !== -1) return -1;
			if (bPrio !== -1) return 1;
			return a.localeCompare(b);
		}).map(c => ({ name: c, value: c }));
	}, [highlights]);

	// Filter Logic
	const filteredHighlights = useMemo(() => {
		let result = highlights;
		if (selectedCategories.length > 0) {
			result = highlights.filter(h => {
				// Check if highlight has ANY of the selected categories (case-insensitive check)
				return h.categories.some(cat => {
					// Normalize both the item category and selected values for comparison
					const normalizedCat = cat.toLowerCase();
					return selectedCategories.some(selected => selected.toLowerCase() === normalizedCat);
				});
			});
		}
		// Ensure sorting is maintained after filtering
		return result.sort((a, b) => {
			if (a.featured && !b.featured) return -1;
			if (!a.featured && b.featured) return 1;
			return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
		});
	}, [highlights, selectedCategories]);

	const featuredHighlight = filteredHighlights.find(h => h.featured);
	const otherHighlights = filteredHighlights.filter(h => !h.featured);

	return (
		<div>
			{showHeader && (
				<div className="mb-12">
					<div className="flex flex-wrap items-center gap-4 mb-4">
						<h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
							Highlights
						</h1>
						{isAdmin && (
							<HighlightDialog
								onHighlightUpdate={handleHighlightUpdate}
								trigger={
									<Button className="rounded-full shadow-lg hover:shadow-xl transition-all" size="sm">
										<PlusIcon className="w-4 h-4 mr-2" />
										Add Highlight
									</Button>
								}
							/>
						)}
					</div>
					<p className="max-w-xl text-lg text-muted-foreground leading-relaxed mb-8">
						Explore our latest activities, research resources, and event recordings from around the globe.
					</p>

					{/* Filters */}
					<div className="pb-4">
						<FilterChips
							options={categories}
							selectedValues={selectedCategories}
							onSelect={(val) => {
								setSelectedCategories(prev => 
									prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
								);
							}}
						/>
					</div>
				</div>
			)}

			{loading && <div className="py-20 flex justify-center"><Spinner /></div>}
			
			{!loading && filteredHighlights.length === 0 && (
				<div className="text-center text-muted-foreground py-20 bg-muted/10 rounded-3xl border border-dashed border-border">
					No highlights found matching your filters.
				</div>
			)}

			<div className="space-y-12">
				{featuredHighlight && (
					<div className="relative group">
						<FeaturedHighlight highlight={featuredHighlight} />
						
						{isAdmin && (
							<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
								<Button 
									size="icon" 
									variant="secondary" 
									className="h-8 w-8 rounded-full shadow-sm text-yellow-500 bg-white dark:bg-slate-800 hover:bg-gray-100"
									onClick={() => handleFeaturedToggle(featuredHighlight.id, true)}
									title="Un-feature"
								>
									<StarIcon className="w-4 h-4 fill-current" />
								</Button>
								<HighlightDialog
									highlight={featuredHighlight}
									onHighlightUpdate={handleHighlightUpdate}
									trigger={
										<Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-sm bg-white dark:bg-slate-800 hover:bg-gray-100">
											<PencilIcon className="w-4 h-4" />
										</Button>
									}
								/>
								<HighlightDeleteDialog
									highlight={featuredHighlight}
									onHighlightDeleted={handleHighlightDeleted}
									trigger={
										<Button size="icon" variant="destructive" className="h-8 w-8 rounded-full shadow-sm">
											<TrashIcon className="w-4 h-4" />
										</Button>
									}
								/>
							</div>
						)}
					</div>
				)}

				<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
					{otherHighlights.map((highlight) => (
						<div key={highlight.id} className="break-inside-avoid relative group">
							<HighlightCard highlight={highlight} />
							
							{/* Admin Controls Overlay */}
							{isAdmin && (
								<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
									<Button 
										size="icon" 
										variant="secondary" 
										className={`h-8 w-8 rounded-full shadow-sm ${highlight.featured ? 'text-yellow-500' : 'text-muted-foreground'}`}
										onClick={() => handleFeaturedToggle(highlight.id, !!highlight.featured)}
									>
										<StarIcon className={`w-4 h-4 ${highlight.featured ? 'fill-current' : ''}`} />
									</Button>
									<HighlightDialog
										highlight={highlight}
										onHighlightUpdate={handleHighlightUpdate}
										trigger={
											<Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-sm">
												<PencilIcon className="w-4 h-4" />
											</Button>
										}
									/>
									<HighlightDeleteDialog
										highlight={highlight}
										onHighlightDeleted={handleHighlightDeleted}
										trigger={
											<Button size="icon" variant="destructive" className="h-8 w-8 rounded-full shadow-sm">
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
		</div>
	);
}
