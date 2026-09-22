export default function Winner() {
	return (
		<section
			id="winner"
			className="scroll-mt-16 relative bg-black/60 py-28 sm:py-36 overflow-hidden"
		>
			{/* Soft radial glow, warmer than the About section so the result reads
			    as the one celebratory moment on the page */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						19 September 2026 &middot; The Result
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1.1] max-w-5xl">
					Congratulations to{' '}
					<span className="italic inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent pr-2">
						Team 10,
					</span>{' '}
					winners of the first DubLINK.
				</h2>

				<p className="mt-8 text-xl sm:text-2xl font-medium text-white/75 tracking-tight leading-snug max-w-4xl">
					Eleven judges scored every presentation on the failure found and
					explained, collaboration, creativity, the quality of the questions
					asked and clarity. Team 10 came first, topping the field on the
					failure they found, on the questions they asked and on clarity.
				</p>

				<div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-14">
					<div className="lg:col-span-7">
						<p className="text-lg sm:text-xl text-white/70 leading-relaxed tracking-tight">
							Six teams presented, and the field behind first place was close
							enough that the order is not worth reading anything into. Every
							team found something real. The finding they reached
							independently of each other: the models downgraded care once the
							patient&rsquo;s social context changed, with no change in the
							clinical picture, and none of the models asked for the
							information they were missing.
						</p>
					</div>
					<div className="lg:col-span-5">
						<p className="text-lg sm:text-xl text-white/70 leading-relaxed tracking-tight">
							Those findings belong to the teams who made them, and they are
							the basis of a perspective piece now being written up for
							publication. Thank you to everyone who gave up a Saturday to
							stress test clinical AI with us.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
