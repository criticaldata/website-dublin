import { PRIMARY_CONTACT } from '@/lib/organisers';
import { LinkedInIcon } from '@/components/common/social-icons';

export default function Footer() {
	return (
		<footer className="bg-black z-50 w-full flex flex-col gap-3 border-t border-white/10 px-6 md:px-12 py-6">
			<div className="w-full flex flex-col sm:flex-row gap-3 items-center justify-between">
				<p className="text-sm leading-4 text-gray-300">
					&copy; {new Date().getFullYear()} DubLINK AI in Healthcare LLM-athon
					&middot; Dublin, Ireland
				</p>
				<a
					href={PRIMARY_CONTACT.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
				>
					<LinkedInIcon className="h-4 w-4" />
					{PRIMARY_CONTACT.name}
				</a>
			</div>
			<p className="text-xs text-gray-500 text-center sm:text-left">
				Header photo:{' '}
				<a
					href="https://www.flickr.com/photos/giuseppemilo/16193381408"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-gray-300 transition-colors"
				>
					&ldquo;Samuel Beckett bridge at sunset&rdquo; by Giuseppe Milo
				</a>
				, licensed under{' '}
				<a
					href="https://creativecommons.org/licenses/by/2.0/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-gray-300 transition-colors"
				>
					CC BY 2.0
				</a>{' '}
				(colour-graded).
			</p>
		</footer>
	);
}
