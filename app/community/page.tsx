import Link from 'next/link';
import { socialMediaLinks } from '@/components/common/social-icons';

export default function CommunityPage() {
	return (
		<div>
			<div className="relative overflow-hidden">
				<div aria-hidden className="pointer-events-none absolute inset-0">
					<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-red-700/30 blur-3xl"></div>
				</div>
				<div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Connect with our Community
						</h1>
						<p className="my-8 text-xl leading-8 text-muted-foreground">
							Join our global network of healthcare AI researchers,
							practitioners, and enthusiasts. Follow us and get involved.
						</p>
						<div className="mt-12 flex flex-wrap items-center justify-center gap-3">
							{socialMediaLinks.map((s) => (
								<Link
									key={s.name}
									href={s.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-red-600 hover:text-white"
								>
									<s.icon className="h-4 w-4" />
									<span>{s.name}</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="px-8">
				<div className="bg-red-600/10 mb-36 max-w-5xl mx-auto relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:ring-1 dark:after:ring-inset dark:after:ring-white/10 dark:after:sm:rounded-3xl">
					<h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						A vibrant community awaits. Explore our work to get a sense of what
						you can be a part of.
					</h2>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/events"
							className="rounded-full h-12 bg-white flex items-center justify-center px-6 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/15 dark:focus-visible:outline-white"
						>
							{' '}
							Upcoming Events
						</Link>
						<Link
							href="/research"
							className="rounded-full h-12 bg-white flex items-center justify-center px-6 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/15 dark:focus-visible:outline-white"
						>
							{' '}
							Publications
						</Link>
					</div>
					<svg
						viewBox="0 0 1024 1024"
						aria-hidden="true"
						className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
					>
						<circle
							r={512}
							cx={512}
							cy={512}
							fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
							fillOpacity="0.7"
						/>
						<defs>
							<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
								<stop stopColor="#b91c1c" />
								<stop offset={1} stopColor="#b91c1c" />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}
