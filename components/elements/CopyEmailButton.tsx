'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Check, Copy } from 'lucide-react';

export default function CopyEmailButton({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		} catch {
			// Clipboard unavailable (e.g. insecure context) — fall back to mailto
			window.location.href = `mailto:${email}`;
		}
	};

	return (
		<div className="flex flex-col items-center gap-4">
			<a
				href={`mailto:${email}?subject=DubLINK%20LLM-athon%20%E2%80%94%20Registration%20Interest`}
				className="inline-block"
			>
				<Button className="relative h-16 rounded-full px-12 text-lg font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:via-teal-400 hover:to-cyan-400 text-white shadow-2xl shadow-emerald-900/40 transition-all duration-300 hover:shadow-teal-900/40 hover:-translate-y-0.5 group overflow-hidden">
					<span className="relative flex items-center">
						Register Your Interest
						<Mail className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
					</span>
				</Button>
			</a>

			<button
				type="button"
				onClick={copy}
				className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-sm sm:text-base text-teal-200/90 hover:text-teal-100 hover:border-teal-400/50 transition-all"
			>
				{copied ? (
					<>
						<Check className="h-4 w-4 text-emerald-400" />
						Copied to clipboard
					</>
				) : (
					<>
						<Copy className="h-4 w-4" />
						{email}
					</>
				)}
			</button>
		</div>
	);
}
