import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-black z-50 w-full flex flex-col sm:flex-row gap-3 items-center border-t border-white/10 justify-between px-6 md:px-12 py-6">
			<p className="text-sm leading-4 text-gray-300">
				&copy; {new Date().getFullYear()} DubLINK AI in Healthcare LLM-athon
				&middot; Dublin, Ireland
			</p>
			<Link
				href="mailto:dublink.llmathon@gmail.com"
				className="text-sm text-gray-300 hover:text-white transition-colors"
			>
				dublink.llmathon@gmail.com
			</Link>
		</footer>
	);
}
