// Static-export image loader: GitHub Pages serves the site under a base path
// (e.g. /website-dublin) and has no image-optimizer server, so images are
// served as-is with the base path prepended at build time.
export default function imageLoader({ src }: { src: string }) {
	if (src.startsWith('http')) return src;
	return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`;
}
