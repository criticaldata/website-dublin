import type { NextConfig } from 'next';

// Set NEXT_PUBLIC_BASE_PATH=/website-dublin when building for GitHub Pages
// (the deploy workflow does this). Local dev and plain builds are unaffected.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
	output: 'export',
	basePath,
	images: {
		loader: 'custom',
		loaderFile: './lib/image-loader.ts',
	},
};

export default nextConfig;
