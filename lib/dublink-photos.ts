import type { GalleryPhoto } from '@/components/elements/PhotoGallery';

// Photos from DubLINK on 19 September 2026. Each one has a full-size file for
// the lightbox and a small thumb for its grid tile, both resized from the
// originals with all metadata stripped.
const photo = (
	slug: string,
	alt: string,
	extra: Partial<GalleryPhoto> = {}
): GalleryPhoto => ({
	src: `/dublin/photos/dublink/${slug}.jpg`,
	thumb: `/dublin/photos/dublink/thumbs/${slug}.jpg`,
	alt,
	...extra,
});

// Hero mosaic: the group photo takes the big tile
export const heroPhotos: GalleryPhoto[] = [
	photo('group-photo', 'Everyone at DubLINK', {
		span: 'sm:col-span-2 sm:row-span-2',
	}),
	photo('pointing-at-the-screen', 'Working through the case'),
	photo('all-smiles', 'All smiles'),
	photo('the-room', 'The room at Workday Dublin', {
		span: 'sm:col-span-2',
		position: 'object-[center_60%]',
	}),
];

// The gallery, in display order. Twenty-four tiles, so every row fills at
// two, three and four columns.
export const galleryPhotos: GalleryPhoto[] = [
	photo('heads-down', 'Heads down on the case'),
	photo('by-the-banner-bw', 'Welcome to DubLINK'),
	photo('comparing-answers', 'Comparing answers'),
	photo('talking-it-through', 'Talking it through'),
	photo('working-the-prompts-bw', 'Working the prompts'),
	photo('full-room', 'A full room'),
	photo('good-energy-bw', 'Good energy'),
	photo('listening-in', 'Listening in'),
	photo('table-talk', 'Table talk'),
	photo('between-activities-bw', 'A quick chat'),
	photo('leaning-in', 'Leaning in'),
	photo('checking-the-output-bw', 'Checking the output'),
	photo('catching-up-bw', 'Catching up by the banner'),
	photo('in-full-swing', 'In full swing'),
	photo('swapping-notes-bw', 'Swapping notes'),
	photo('banner-group-1', 'By the banner'),
	photo('team-presentation', 'Team presentations'),
	photo('debating-the-plan-bw', 'Debating the plan'),
	photo('the-panel', 'The panel'),
	photo('huddled-round-one-screen-bw', 'Huddled round one screen'),
	photo('deep-in-discussion-bw', 'Deep in discussion'),
	photo('a-closer-look-bw', 'A closer look'),
	photo('afternoon-session', 'Afternoon session'),
	photo('banner-group-2', 'One more by the banner'),
];
