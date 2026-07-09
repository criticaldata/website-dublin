const sessions = [
	{ time: '09:00–09:15', title: 'Welcome & Arrival', kind: 'plenary' },
	{ time: '09:15–10:00', title: 'Keynote Lecture 1', kind: 'keynote' },
	{ time: '10:00–10:45', title: 'Keynote Lecture 2', kind: 'keynote' },
	{ time: '10:45–11:15', title: 'Coffee Break', kind: 'break' },
	{ time: '11:15–11:45', title: 'Introduction to the LLM-athon', kind: 'plenary' },
	{
		time: '11:45–12:30',
		title: 'Activity 1 — Prompt Engineering & Clinical Reasoning',
		kind: 'activity',
	},
	{ time: '12:30–13:30', title: 'Lunch & Networking', kind: 'break' },
	{
		time: '13:30–14:15',
		title: 'Activity 2 — Evaluating LLM Responses',
		kind: 'activity',
	},
	{
		time: '14:15–15:00',
		title: 'Activity 3 — LLM Failure Modes & Safe Implementation',
		kind: 'activity',
	},
	{ time: '15:00–15:15', title: 'Coffee Break', kind: 'break' },
	{
		time: '15:15–16:00',
		title: 'Group Presentations & Workshop Debrief',
		kind: 'plenary',
	},
	{
		time: '16:00–16:45',
		title: 'Panel Discussion — The Future of AI in Irish Healthcare',
		kind: 'keynote',
	},
	{ time: '16:45–17:00', title: 'Closing Remarks', kind: 'plenary' },
];

const kindStyles: Record<string, string> = {
	keynote: 'bg-teal-400',
	activity: 'bg-emerald-400',
	plenary: 'bg-cyan-400/70',
	break: 'bg-white/25',
};

export default function Programme() {
	return (
		<section
			id="programme"
			className="relative bg-black/60 py-24 sm:py-32 overflow-hidden"
		>
			{/* Soft glow */}
			<div className="absolute right-0 top-1/3 h-[50vh] w-[50vh] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_60%)] pointer-events-none" />

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Editorial kicker */}
				<div className="flex items-center gap-4 mb-10">
					<div className="h-px w-12 sm:w-20 bg-teal-400/60" />
					<span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-teal-400/90 font-bold">
						Programme
					</span>
				</div>

				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mb-6">
					One packed day,{' '}
					<span className="italic text-white/50">start to finish.</span>
				</h2>
				<p className="text-base sm:text-lg text-white/50 max-w-2xl mb-14">
					Keynotes in the morning, hands-on LLM activities through the
					afternoon, closing with a panel on the future of AI in Irish
					healthcare.
				</p>

				{/* Timeline */}
				<ol className="relative border-l border-white/10 space-y-1">
					{sessions.map((session) => (
						<li
							key={session.time}
							className="group relative flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 rounded-xl px-5 py-4 -ml-px border-l-2 border-transparent hover:border-teal-400/70 hover:bg-white/[0.03] transition-all duration-300"
						>
							<span className="flex items-center gap-3 shrink-0 sm:w-36">
								<span
									className={`inline-flex h-1.5 w-1.5 rounded-full ${kindStyles[session.kind]}`}
								/>
								<span className="font-mono text-xs sm:text-sm text-white/45 tracking-wide">
									{session.time}
								</span>
							</span>
							<span
								className={`text-base sm:text-lg tracking-tight ${
									session.kind === 'break'
										? 'text-white/40 italic'
										: 'text-white/85 font-medium group-hover:text-white'
								}`}
							>
								{session.title}
							</span>
						</li>
					))}
				</ol>

				{/* Legend */}
				<div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
					<span className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Keynotes
						&amp; panel
					</span>
					<span className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						Hands-on activities
					</span>
					<span className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
						Plenary
					</span>
					<span className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-white/25" /> Breaks
					</span>
				</div>
			</div>
		</section>
	);
}
