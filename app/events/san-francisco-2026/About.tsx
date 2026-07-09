export default function About() {
	return (
		<section
			id="about"
			className="relative bg-black/60 py-28 sm:py-36 lg:py-44 overflow-hidden"
		>
			{/* Subtle Andean-inspired stepped diamond pattern */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 10 L40 15 L35 20 L40 25 L35 30 L30 35 L25 30 L20 25 L25 20 L20 15 L25 10 Z' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Soft radial glow */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.06)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-amber-500/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-amber-500/90 font-bold">
						A Convening
					</span>
				</div>

				{/* Institutional convening — big editorial statement */}
				<h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1] max-w-5xl">
					When capital, conviction, and community share a room,{' '}
					<span className="italic inline-block bg-gradient-to-r from-red-500 via-amber-500 to-orange-400 bg-clip-text text-transparent pr-2">
						the next breakthrough begins.
					</span>
				</h2>

				{/* Sub-hook */}
				<p className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white/75 tracking-tight leading-snug max-w-4xl">
					This May, <span className="text-white">MIT</span>,{' '}
					<span className="text-white">Stanford</span>, and{' '}
					<span className="text-white">Threshold Ventures</span> are building
					that room in the heart of Silicon Valley.
				</p>

				{/* Hosts & Partners — editorial credits */}
				<div className="mt-16">
					{/* Hosts */}
					<div className="text-[0.7rem] uppercase tracking-[0.3em] text-amber-500/80 font-bold mb-5">
						Hosted by
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
						{['MIT', 'Stanford', 'Threshold Ventures'].map(
							(host) => (
								<div
									key={host}
									className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-amber-500/30 hover:from-amber-500/[0.06] transition-all duration-300 flex items-center justify-center min-h-[100px] sm:min-h-[120px] px-6 py-8 overflow-hidden"
								>
									{/* Corner glow on hover */}
									<div className="absolute -top-10 -right-10 h-24 w-24 bg-amber-500/0 group-hover:bg-amber-500/15 blur-2xl rounded-full transition-all duration-500" />
									<span className="relative text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white tracking-tighter text-center leading-tight">
										{host}
									</span>
								</div>
							)
						)}
					</div>

					{/* Partners */}
					<div className="mt-10">
						<div className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
							With partners from
						</div>
						<div className="flex flex-wrap gap-2.5">
							{[
								'Johns Hopkins University',
								'Harvard Medical School',
								'UC Berkeley',
								'Brigham & Women\u2019s Hospital',
								'Dana-Farber Cancer Institute',
								'Universit\u00e9 de Gen\u00e8ve',
								'Anatomage',
								'Global Ultrasound Institute',
							].map((partner) => (
								<span
									key={partner}
									className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-medium text-white/65 hover:text-white/90 hover:border-white/20 transition-all"
								>
									{partner}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Supporting prose — two asymmetric columns */}
				<div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-14">
					<div className="lg:col-span-7">
						<p className="text-xl sm:text-2xl font-medium text-white/80 leading-snug tracking-tight">
							Two days with founders, investors, clinicians, researchers, and
							community leaders, all working on what better health innovation
							actually looks like.
						</p>
					</div>
					<div className="lg:col-span-5 lg:pt-2">
						<div className="h-px w-16 bg-gradient-to-r from-amber-500/60 to-transparent mb-6" />
						<p className="text-base sm:text-lg text-white/55 leading-relaxed font-light">
							Over two days in San Francisco, we will challenge the status quo
							of entrepreneurship, question whose values drive innovation, and
							rethink how health innovation actually gets built, beyond Silicon
							Valley&rsquo;s echo chamber.
						</p>
					</div>
				</div>

				{/* Decorative accent */}
				<div className="mt-20 flex items-center gap-4">
					<div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
					<span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/40">
						May 1&ndash;2, 2026
					</span>
					<div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
				</div>
			</div>
		</section>
	);
}
