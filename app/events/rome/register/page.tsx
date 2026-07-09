import type { Metadata } from 'next';
import RegisterPageClient from './RegisterPageClient';

export const metadata: Metadata = {
	title: 'Apply to Attend - AI as a Catalyst Roma | MIT Critical Data',
	description:
		'Apply to attend AI as a Catalyst: Roma, a community-led gathering centering immigrant communities in the AI revolution from September 4-5, 2026.',
};

export default function RegisterPage() {
	return <RegisterPageClient />;
}
