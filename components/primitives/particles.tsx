'use client';
import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function RenderParticles({
	fullScreen = true,
}: {
	/** Set false to contain the canvas within its own positioned parent
	 *  instead of covering the whole viewport (used inside Hero, whose
	 *  photo backdrop otherwise fully occludes the page-wide layer). */
	fullScreen?: boolean;
}) {
	const particlesInit = useCallback(async (engine: Engine) => {
		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				particles: {
					number: {
						value: 60,
						density: {
							enable: true,
							value_area: 1000,
						},
					},
					shape: {
						type: 'circle',
						stroke: {
							width: 0,
							color: '#000000',
						},
						polygon: {
							nb_sides: 5,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					color: {
						value: ['#99f6e4', '#5eead4', '#a5f3fc'],
					},
					opacity: {
						value: 0.5,
						random: false,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					links: {
						enable: true,
						color: '#14b8a6',
						distance: 150,
						opacity: 0.45,
						width: 1.4,
					},
					move: {
						enable: true,
						speed: 2,
						direction: 'none',
						random: false,
						straight: false,
						bounce: false,
						outMode: 'out',
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
					collisions: {
						enable: false,
					},
				},
				detectRetina: true,
				fullScreen: {
					enable: fullScreen,
					zIndex: 0,
				},
			}}
		/>
	);
}
