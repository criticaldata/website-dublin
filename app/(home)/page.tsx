import type { Metadata } from 'next';
import RenderParticles from '@/components/primitives/particles';
import Hero from './Hero';
import About from './About';
import Programme from './Programme';
import Workshop from './Workshop';
import Audience from './Audience';
import Speakers from './Speakers';
import Committee from './Committee';
import Venue from './Venue';
import Partners from './Partners';
import RegisterCTA from './RegisterCTA';
import StickyRegister from './StickyRegister';

export const metadata: Metadata = {
	title: 'DubLINK AI in Healthcare LLM-athon — Dublin',
	description:
		'A one-day interactive LLM-athon exploring generative AI in healthcare. Saturday, 19 September 2026 at Tallaght University Hospital, Dublin, Ireland.',
	openGraph: {
		title: 'DubLINK AI in Healthcare LLM-athon',
		description:
			'Connect. Collaborate. Innovate. Exploring LLMs in healthcare — 19 September 2026, Dublin.',
		type: 'website',
	},
};

export default function HomePage() {
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
				<Programme />
				<Workshop />
				<Audience />
				<Speakers />
				<Committee />
				<Venue />
				<Partners />
				<RegisterCTA />
			</div>

			<StickyRegister />
		</div>
	);
}
