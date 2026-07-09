import Header from '@/components/common/header';
import { Geist } from 'next/font/google';
import ThemeProvider from '@/providers/theme-provider';
import Footer from '@/components/common/footer';
import './globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react';
import Spinner from '@/components/primitives/spinner';
import { Toaster } from '@/components/ui/sonner';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'DubLINK AI in Healthcare LLM-athon',
	description:
		'A one-day interactive educational event exploring Large Language Models and generative AI in healthcare. Saturday, 19 September 2026 at Tallaght University Hospital, Dublin, Ireland.',
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
