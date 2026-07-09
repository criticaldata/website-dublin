import MissionStatement from './Mission_Statement';
import Mission_Impact from './Mission_Impact';

export default function Mission() {
	return (
		<div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
			<svg
				className="absolute inset-0 -z-10 h-full w-full stroke-indigo-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
						width={200}
						height={200}
						x="50%"
						y={-1}
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<rect
					width="100%"
					height="100%"
					strokeWidth={0}
					fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
				/>
			</svg>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<MissionStatement />
				<div className="mt-36">
					<Mission_Impact />
				</div>
			</div>
		</div>
	);
}
