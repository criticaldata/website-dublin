'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

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
		const target = document.getElementById('register');
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
			<Link href="#register">
				<button className="group relative inline-flex items-center gap-2 h-12 sm:h-14 rounded-full px-5 sm:px-7 text-sm sm:text-base font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:via-teal-400 hover:to-cyan-400 text-white shadow-2xl shadow-emerald-900/40 transition-all duration-300 hover:shadow-teal-900/50 hover:-translate-y-0.5 overflow-hidden">
					{/* Animated pulse ring */}
					<span className="absolute inset-0 rounded-full border border-teal-300/40 animate-ping opacity-40" />
					<span className="relative flex items-center">
						Register Interest
						<ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
					</span>
				</button>
			</Link>
		</div>
	);
}
