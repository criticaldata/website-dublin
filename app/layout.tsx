import Header from '@/components/common/header';
import { Geist } from 'next/font/google';
import ThemeProvider from '@/providers/theme-provider';
import Footer from '@/components/common/footer';
import './globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react';
import Spinner from '@/components/primitives/spinner';
import AuthBtns from '@/components/common/auth-btns';
import { Toaster } from '@/components/ui/sonner';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'MIT Critical Data',
	description:
		'Building a global community committed to developing & improving health AI.',
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
		<html lang="en" className={geistSans.className} suppressHydrationWarning>
			<body className="bg-background text-foreground dark">
				<Suspense fallback={<Spinner className="h-[calc(100vh-20rem)]" />}>
					<NuqsAdapter>
						<ThemeProvider>
							<main className="min-h-screen flex flex-col items-center">
								<Header>
									<AuthBtns />
								</Header>
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
