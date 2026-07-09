import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href="/">
			<div className="flex items-center gap-2.5 p-2">
				<div className="shrink-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-teal-400/40 p-0.5">
					<span className="sr-only">DubLINK</span>
					<Image
						className="h-9 w-9 rounded-full object-cover"
						src="/dublin/dublink-mark.png"
						alt="DubLINK LLM-athon"
						width={40}
						height={40}
					/>
				</div>
				<div className="font-semibold text-sm leading-4 text-gray-300 hover:text-white transition-colors whitespace-nowrap">
					<div>DubLINK</div>
					<div className="text-xs font-normal text-gray-400">LLM-athon</div>
				</div>
			</div>
		</Link>
	);
}
