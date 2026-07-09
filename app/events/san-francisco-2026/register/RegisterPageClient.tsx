'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

export default function RegisterPageClient() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="relative bg-black min-h-screen overflow-hidden">
			{/* Grain overlay — atmospheric texture across the whole page */}
			<div
				aria-hidden
				className="pointer-events-none fixed inset-0 opacity-[0.035] mix-blend-overlay z-[1]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* ─────────── HEADER — editorial (hidden once submitted) ─────────── */}
			{!submitted && (
				<header className="relative border-b border-white/5">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,119,6,0.1)_0%,_transparent_60%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(185,28,28,0.08)_0%,_transparent_60%)]" />

					<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 pb-14">
						<Link
							href="/events/san-francisco-2026"
							className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-amber-400 transition-colors mb-10 group"
						>
							<ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
							Back to event page
						</Link>

						<div className="flex items-center gap-3 mb-6">
							<div className="h-px w-12 bg-amber-500/60" />
							<span className="text-[0.7rem] uppercase tracking-[0.3em] text-amber-500/80 font-semibold">
								Apply to Attend
							</span>
						</div>

						<h1 className="font-bold tracking-tighter leading-[0.9]">
							<span className="block text-[11vw] sm:text-7xl lg:text-8xl bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent">
								AI as a
							</span>
							<span className="block text-[11vw] sm:text-7xl lg:text-8xl italic bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent pl-[8%] pr-4">
								Catalyst.
							</span>
						</h1>

						<div className="mt-6 max-w-2xl pl-[8%]">
							<p className="text-xl sm:text-2xl font-medium text-white/90 tracking-tight leading-snug">
								Reimagining Health Innovation
							</p>
							<div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/40">
								<span>May 1&ndash;2, 2026</span>
								<span className="h-1 w-1 rounded-full bg-white/20" />
								<span>San Francisco Bay Area</span>
								<span className="h-1 w-1 rounded-full bg-white/20" />
								<span className="inline-flex items-center gap-1.5 text-amber-300/90 font-semibold">
									<span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
									Free to attend
								</span>
							</div>
						</div>

						<div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
							<div className="lg:col-span-10 lg:col-start-2">
								<p className="text-lg sm:text-xl text-white/80 leading-snug font-medium tracking-tight">
									When capital, conviction, and community share a room,{' '}
									<span className="italic text-amber-400">
										the next breakthrough begins.
									</span>
								</p>
								<p className="mt-5 text-base sm:text-lg text-white/55 leading-relaxed">
									This May, <span className="text-white/90">MIT</span>,{' '}
									<span className="text-white/90">Stanford</span>, and{' '}
									<span className="text-white/90">Threshold Ventures</span> are
									building that room in the heart of Silicon Valley, with
									partners from Johns Hopkins, Harvard Medical School, UC
									Berkeley, and beyond.
								</p>
								<p className="mt-5 text-base sm:text-lg text-white/55 leading-relaxed">
									Two days with founders, investors, clinicians, researchers,
									and community leaders, all working on what better health
									innovation actually looks like.
								</p>
							</div>
						</div>

						<div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
							<div className="max-w-xl flex gap-5">
								<div className="flex-shrink-0 w-1 bg-gradient-to-b from-amber-500 to-red-700 rounded-full" />
								<div>
									<p className="text-[0.7rem] uppercase tracking-[0.25em] text-amber-500/80 font-bold mb-2">
										A note on selection
									</p>
									<p className="text-sm text-white/55 leading-relaxed">
										This is an intimate, curated gathering. Submitting this form
										places you on our waitlist. It does not guarantee a spot. We
										will review all applications and notify you as early as
										possible.
									</p>
								</div>
							</div>

							<a
								href="#apply-form"
								className="group inline-flex items-center gap-3 self-start lg:self-end flex-shrink-0 rounded-full border border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-500/60 px-5 py-3 transition-all duration-300"
							>
								<span className="text-sm font-semibold text-amber-300 tracking-wide">
									Start application
								</span>
								<ArrowDown className="h-4 w-4 text-amber-300 group-hover:translate-y-0.5 transition-transform animate-bounce" />
							</a>
						</div>
					</div>
				</header>
			)}

			{/* ─────────── FORM ─────────── */}
			<main
				id="apply-form"
				className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-8"
			>
				<RegistrationForm onSubmitted={() => setSubmitted(true)} />
			</main>
		</div>
	);
}
