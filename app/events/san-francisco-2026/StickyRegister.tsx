'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

const REGISTER_URL = '/events/san-francisco-2026/register';

export default function StickyRegister() {
	const [scrolledPastHero, setScrolledPastHero] = useState(false);
	const [ctaInView, setCtaInView] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolledPastHero(window.scrollY > window.innerHeight * 0.7);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		// Hide sticky button once the main Register CTA section comes into view
		const target = document.getElementById('register-cta');
		if (!target) {
			return () => window.removeEventListener('scroll', onScroll);
		}

		const observer = new IntersectionObserver(
			([entry]) => setCtaInView(entry.isIntersecting),
			{ rootMargin: '0px 0px -20% 0px', threshold: 0 }
		);
		observer.observe(target);

		return () => {
			window.removeEventListener('scroll', onScroll);
			observer.disconnect();
		};
	}, []);

	const visible = scrolledPastHero && !ctaInView;

	return (
		<div
			className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
				visible
					? 'opacity-100 translate-y-0 pointer-events-auto'
					: 'opacity-0 translate-y-4 pointer-events-none'
			}`}
		>
			<Link href={REGISTER_URL}>
				<button className="group relative inline-flex items-center gap-2 h-12 sm:h-14 rounded-full px-5 sm:px-7 text-sm sm:text-base font-semibold bg-gradient-to-r from-red-700 via-amber-600 to-orange-500 hover:from-red-600 hover:via-amber-500 hover:to-orange-400 text-white shadow-2xl shadow-red-900/40 transition-all duration-300 hover:shadow-amber-900/50 hover:-translate-y-0.5 overflow-hidden">
					{/* Animated pulse ring */}
					<span className="absolute inset-0 rounded-full border border-amber-400/40 animate-ping opacity-40" />
					<span className="relative flex items-center">
						Apply to Attend
						<ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
					</span>
				</button>
			</Link>
		</div>
	);
}
