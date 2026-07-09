import type { Metadata } from 'next';
import RenderParticles from '@/components/primitives/particles';
import Hero from './Hero';
import About from './About';
import Schedule from './Schedule';
import Audience from './Audience';
import Organizers from './Organizers';
import RegisterCTA from './RegisterCTA';
import StickyRegister from './StickyRegister';

export const metadata: Metadata = {
	title: 'AI as a Catalyst \u2014 San Francisco | MIT Critical Data',
	description:
		'A two-day gathering in San Francisco reimagining innovation, entrepreneurship, and AI equity. May 1\u20132, 2026 at Threshold Ventures & Stanford University.',
	openGraph: {
		title: 'AI as a Catalyst \u2014 San Francisco',
		description:
			'Reimagining innovation and AI equity. May 1\u20132, 2026 in San Francisco.',
		type: 'website',
	},
};

export default function SanFrancisco2026Page() {
	return (
		<div className="relative bg-black">
			{/* Fixed particles background — persists while scrolling */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<RenderParticles />
			</div>

			{/* Content layered above particles */}
			<div className="relative z-10">
				<Hero />
				<About />
				<Schedule />
				<Audience />
				<Organizers />
				<RegisterCTA />
			</div>

			<StickyRegister />
		</div>
	);
}
