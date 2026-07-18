import Header from '@/components/common/header';
import { Geist } from 'next/font/google';
import ThemeProvider from '@/providers/theme-provider';
import Footer from '@/components/common/footer';
import './globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react';
import Spinner from '@/components/primitives/spinner';
import { Toaster } from '@/components/ui/sonner';

// basePath is baked in at build time (GitHub Pages serves under /website-dublin);
// icon URLs must carry it or they 404 on the deployed site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata = {
	metadataBase: new URL('https://criticaldata.github.io/website-dublin'),
	title: 'DubLINK AI in Healthcare LLM-athon',
	description:
		'A one-day interactive educational event exploring Large Language Models and generative AI in healthcare. Saturday, 19 September 2026 in Dublin, Ireland.',
	icons: {
		// ?v=2 busts the old (MIT-logo) favicon out of browser caches — favicons
		// are cached per-URL, so a content change alone never shows up
		icon: [
			{ url: `${basePath}/favicon.ico?v=2`, sizes: 'any' },
			{
				url: `${basePath}/icon-192.png?v=2`,
				type: 'image/png',
				sizes: '192x192',
			},
			{
				url: `${basePath}/icon-512.png?v=2`,
				type: 'image/png',
				sizes: '512x512',
			},
		],
		apple: `${basePath}/apple-touch-icon.png?v=2`,
	},
};

const geistSans = Geist({
	display: 'swap',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.className} scroll-smooth`}
			suppressHydrationWarning
		>
			<body className="bg-background text-foreground dark">
				<Suspense fallback={<Spinner className="h-[calc(100vh-20rem)]" />}>
					<NuqsAdapter>
						<ThemeProvider>
							<main className="min-h-screen flex flex-col items-center">
								<Header />
								<div className="flex-1 w-full">{children}</div>
								<Footer />
							</main>
						</ThemeProvider>
					</NuqsAdapter>
				</Suspense>
				<Toaster />
			</body>
		</html>
	);
}
