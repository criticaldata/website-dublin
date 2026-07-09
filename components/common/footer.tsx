import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-black z-50 w-full flex items-center border-t border-white/10 justify-between px-6 md:px-12 py-6">
			<p className="text-sm leading-4 text-gray-300">
				&copy; {new Date().getFullYear()} MIT Critical Data
			</p>
			<Link
				href="https://accessibility.mit.edu"
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm text-gray-300 hover:text-white transition-colors"
			>
				Accessibility
			</Link>
		</footer>
	);
}
