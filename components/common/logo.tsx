import Image from 'next/image';
import Link from 'next/link';

export function Pigeon({ className }: { className: string }) {
	return (
		<span className={className} aria-hidden="true">
			<svg viewBox="0 0 16 10" fill="none">
				<path
					d="M1 7.5 Q4.5 1 8 5.5 Q11.5 1 15 7.5"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
				/>
			</svg>
		</span>
	);
}

export default function Logo() {
	return (
		<Link href="/" className="logo-group">
			<div className="flex items-center gap-2.5 p-2">
				<div className="relative shrink-0">
					<div className="logo-badge rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-teal-400/40 p-0.5">
						<span className="sr-only">DubLINK</span>
						<Image
							className="logo-mark h-9 w-9 rounded-full object-cover"
							src="/dublin/dublink-mark.png"
							alt="DubLINK LLM-athon"
							width={40}
							height={40}
						/>
					</div>
					{/* Pigeons take off from the skyline: one ambient flyby on a
					    timer, the full flock while hovering (see globals.css) */}
					<Pigeon className="logo-pigeon logo-pigeon-1" />
					<Pigeon className="logo-pigeon logo-pigeon-2" />
					<Pigeon className="logo-pigeon logo-pigeon-3" />
				</div>
				<div className="font-semibold text-sm leading-4 text-gray-300 hover:text-white transition-colors whitespace-nowrap">
					<div>DubLINK</div>
					<div className="text-xs font-normal text-gray-400">LLM-athon</div>
				</div>
			</div>
		</Link>
	);
}
