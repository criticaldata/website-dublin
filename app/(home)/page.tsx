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

const SITE_URL = 'https://dublin.mitcriticaldata.com';
// Absolute URL on purpose: WhatsApp and other scrapers reject relative
// og:image paths.
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
	title: 'DubLINK AI in Healthcare LLM-athon, Dublin',
	description:
		'A one-day interactive LLM-athon exploring generative AI in healthcare. Saturday, 19 September 2026 at Workday Dublin, Smithfield, Dublin, Ireland.',
	openGraph: {
		title: 'DubLINK AI in Healthcare LLM-athon',
		description:
			'Connect. Collaborate. Innovate. Exploring LLMs in healthcare, 19 September 2026 at Workday Dublin.',
		type: 'website',
		url: SITE_URL,
		siteName: 'DubLINK',
		images: [
			{
				url: OG_IMAGE,
				width: 1200,
				height: 630,
				alt: 'DubLINK AI in Healthcare LLM-athon, 19 September 2026, Workday Dublin, Ireland',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DubLINK AI in Healthcare LLM-athon',
		description:
			'Connect. Collaborate. Innovate. Exploring LLMs in healthcare, 19 September 2026 at Workday Dublin.',
		images: [OG_IMAGE],
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
