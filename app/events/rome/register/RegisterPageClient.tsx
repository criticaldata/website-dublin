'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	ArrowDown,
	ArrowLeft,
	CalendarDays,
	Landmark,
	Monitor,
	Sparkles,
} from 'lucide-react';
import RegistrationForm from './RegistrationForm';
import RomeRegisterPhysics from './RomeRegisterPhysics';

export default function RegisterPageClient() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="relative isolate min-h-screen overflow-hidden bg-[#120f0d] text-[#fff7ea]">
			<RomeRegisterPhysics />

			<div className="fixed inset-0 z-0">
				<Image
					src="/home/datathon2.jpeg"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover opacity-[0.24] saturate-[0.78] contrast-110"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(115deg,_rgba(18,15,13,0.98),_rgba(18,15,13,0.88)_42%,_rgba(16,35,38,0.7))]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,_rgba(180,72,36,0.32),_transparent_34%),radial-gradient(circle_at_78%_12%,_rgba(157,208,211,0.2),_transparent_32%),radial-gradient(circle_at_88%_82%,_rgba(232,183,94,0.18),_transparent_36%)]" />
			</div>

			<div
				aria-hidden
				className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-screen"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
				}}
			/>

			{!submitted && (
				<header className="relative z-20 overflow-hidden border-b border-[#ecd7b3]/[0.12]">
					<div
						aria-hidden
						className="absolute inset-y-8 right-0 hidden w-[46%] lg:block"
					>
						<div className="absolute right-[18%] top-0 h-[86%] w-[48%] rounded-t-full border border-[#e8b75e]/[0.38]" />
						<div className="absolute right-[52%] top-[18%] h-[66%] w-[32%] rounded-t-full border border-[#9dd0d3]/[0.3]" />
						<div className="absolute right-[4%] top-[24%] h-[58%] w-[24%] rounded-t-full border border-[#b44824]/[0.42]" />
					</div>

					<div className="relative mx-auto max-w-7xl px-4 pb-16 pt-7 sm:px-6 sm:pb-20 lg:px-8">
						<Link
							href="/events/rome"
							className="group inline-flex items-center gap-2 text-sm font-medium text-[#ecd7b3]/65 transition-colors hover:text-[#e8b75e]"
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
							Back to Roma
						</Link>

						<div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
							<div className="lg:col-span-7">
								<div className="mb-7 flex items-center gap-4">
									<div className="h-px w-14 bg-[#e8b75e]" />
									<span className="text-xs font-bold uppercase text-[#e8b75e]">
										Apply to attend
									</span>
								</div>

								<h1 className="font-bold leading-none">
									<span className="block text-6xl sm:text-8xl lg:text-9xl">
										Roma
									</span>
									<span className="mt-2 block pl-4 font-serif text-5xl italic text-[#9dd0d3] sm:pl-10 sm:text-7xl lg:text-8xl">
										joins the field.
									</span>
								</h1>

								<p className="mt-8 max-w-2xl text-xl font-medium leading-snug text-[#fff7ea] sm:text-2xl">
									Help shape a community-led AI gathering with second-generation
									Filipinos in Italy, schools, and MIT Critical Data.
								</p>
							</div>

							<div className="lg:col-span-5">
								<div className="rounded-lg border border-[#ecd7b3]/[0.14] bg-[#fff7ea]/[0.07] p-6 backdrop-blur-md sm:p-7">
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
										<Signal Icon={Landmark} label="Place" value="Rome, Italy" />
										<Signal
											Icon={CalendarDays}
											label="Date"
											value="September 4-5, 2026"
										/>
										<Signal
											Icon={Monitor}
											label="Format"
											value="In person, virtual, or either"
										/>
										<Signal
											Icon={Sparkles}
											label="Status"
											value="Applications open"
										/>
									</div>
									<div className="mt-7 border-t border-[#ecd7b3]/[0.12] pt-6">
										<p className="text-sm leading-relaxed text-[#ecd7b3]/70">
											This form places you in the Rome applicant pool. We will
											use your responses to build a room that is
											interdisciplinary, community-grounded, and useful beyond
											the event itself.
										</p>
										<a
											href="#apply-form"
											className="mt-6 inline-flex h-11 items-center gap-3 rounded-md border border-[#e8b75e]/[0.45] bg-[#e8b75e] px-4 text-sm font-bold text-[#19130f] transition-transform hover:-translate-y-0.5 hover:bg-[#f2c76d]"
										>
											Start application
											<ArrowDown className="h-4 w-4" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			)}

			<main
				id="apply-form"
				className="relative z-20 mx-auto w-full max-w-3xl scroll-mt-8 px-4 pb-24 sm:px-6 lg:px-8"
			>
				<RegistrationForm onSubmitted={() => setSubmitted(true)} />
			</main>
		</div>
	);
}

function Signal({
	Icon,
	label,
	value,
}: {
	Icon: React.ComponentType<{ className?: string }>;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-center gap-4">
			<div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#9dd0d3]/[0.28] bg-[#9dd0d3]/[0.1]">
				<Icon className="h-5 w-5 text-[#9dd0d3]" />
			</div>
			<div>
				<div className="text-[0.68rem] font-semibold uppercase text-[#ecd7b3]/50">
					{label}
				</div>
				<div className="mt-1 text-sm font-semibold text-[#fff7ea]">{value}</div>
			</div>
		</div>
	);
}
