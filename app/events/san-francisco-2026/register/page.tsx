import type { Metadata } from 'next';
import RegisterPageClient from './RegisterPageClient';

export const metadata: Metadata = {
	title: 'Apply to Attend \u2014 AI as a Catalyst | MIT Critical Data',
	description:
		'Apply to attend AI as a Catalyst: Reimagining Health Innovation. May 1\u20132, 2026 in the San Francisco Bay Area.',
};

export default function RegisterPage() {
	return <RegisterPageClient />;
}
