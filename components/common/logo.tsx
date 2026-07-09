import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href="/">
			<div className="flex items-center p-2">
				<div>
					<span className="sr-only">MIT</span>
					<Image
						className="h-10 w-auto"
						src="/logo-mit-white.svg"
						alt="MIT"
						width={50}
						height={50}
					/>
				</div>
				<div className="font-semibold text-sm leading-4 text-gray-300 hover:text-white transition-colors">
					<div>Critical</div>
					<div>Data</div>
				</div>
			</div>
		</Link>
	);
}
