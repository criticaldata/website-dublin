import Hero from './Hero';
import Mission from './Mission';
import Resources from './Resources';
import Community from './Community';
import Research from './Research';

export default function Home() {
	return (
		<div>
			<Hero />
			<div className="bg-white relative">
				<div className="pt-24 sm:pt-32">
					<Mission />
				</div>
				<div className="mt-32 sm:mt-40">
					<Research />
				</div>
				<div className="mt-32 sm:mt-40">
					<Community />
				</div>
				<div className="mt-32 sm:mt-40">
					<Resources />
				</div>
			</div>
		</div>
	);
}
