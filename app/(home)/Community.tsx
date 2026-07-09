import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Community() {
	return (
		<div id="community" className="mt-32 sm:mt-52 overflow-hidden">
			<div className="mx-auto px-6 max-w-screen-2xl lg:flex lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div className="lg:col-end-1 lg:w-full lg:max-w-2xl">
						<h1 className="mb-8 font-bold flex items-center gap-x-4">
							<div className="bg-red-800 flex-shrink-0 text-white p-4 font-semibold rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center">
								2
							</div>
							<div className="uppercase text-sm sm:text-xl tracking-wide text-red-700">
								Community Building
							</div>
						</h1>
						<h2 className="tracking-tighter text-3xl lg:text-5xl font-bold text-gray-900">
							We host events{' '}
							<span className="relative whitespace-nowrap text-red-700">
								<svg
									aria-hidden="true"
									viewBox="0 0 418 42"
									className="absolute left-0 top-2/3 h-[0.58em] w-full fill-red-300/70"
									preserveAspectRatio="none"
								>
									<path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
								</svg>
								<span className="relative">globally</span>
							</span>{' '}
							to build Health AI capacity in local communities
						</h2>
						<h3 className="my-6 lg:my-8 text-xl sm:text-2xl font-medium tracking-tight text-slate-500">
							Every month we move around the world to train the global community
							on how to leverage open data, develop AI models, and evaluate AI
							tools in healthcare. Advancing safe, equitable, and democratised
							Health AI can only be reliably achieved{' '}
							<span className="text-red-700 font-semibold">together</span> with
							collective expertise. We build that global AI capacity through{' '}
							<span className="text-red-700 font-semibold">datathons</span> and{' '}
							<span className="text-red-700 font-semibold">
								health & systems thinking for equity
							</span>{' '}
							workshops hosted worldwide.
						</h3>
						<Link href="/events">
							<Button className="rounded-full bg-red-700 text-white hover:bg-red-800 h-12 gap-2">
								<Calendar className="h-5 w-5 flex-shrink-0" />
								<span className="text-lg">View Events</span>
							</Button>
						</Link>
					</div>
					<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
						<div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
							<div className="relative">
								<div className="absolute inset-0 bg-indigo-400 opacity-20 rounded-2xl"></div>
								<Image
									src="/home/datathon1.jpeg"
									alt=""
									className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
									width={1152}
									height={842}
								/>
							</div>
						</div>
						<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
							<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
								<div className="relative">
									<div className="absolute inset-0 bg-indigo-400 opacity-20 rounded-2xl"></div>
									<Image
										src="/home/datathon3.jpeg"
										alt=""
										className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
										width={768}
										height={604}
									/>
								</div>
							</div>
							<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
								<div className="relative">
									<div className="absolute inset-0 bg-indigo-400 opacity-20 rounded-2xl"></div>
									<Image
										src="/home/datathon2.jpeg"
										alt=""
										className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
										width={1152}
										height={842}
									/>
								</div>
							</div>
							<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
								<div className="relative">
									<div className="absolute inset-0 bg-indigo-400 opacity-20 rounded-2xl"></div>
									<Image
										src="/home/datathon4.jpeg"
										alt=""
										className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
										width={768}
										height={604}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
