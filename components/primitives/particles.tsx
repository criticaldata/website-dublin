'use client';
import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function RenderParticles() {
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
						value: '#ffffff',
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
						color: '#7f1D1D',
						distance: 150,
						opacity: 0.6,
						width: 1.6,
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
			}}
		/>
	);
}
