'use client';

import { useEffect, useRef } from 'react';

type Particle = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	ax: number;
	ay: number;
	mass: number;
	radius: number;
	seed: number;
};

type Spring = {
	a: number;
	b: number;
	rest: number;
	strength: number;
};

function seeded(index: number) {
	const value = Math.sin(index * 127.1 + 311.7) * 43758.5453123;
	return value - Math.floor(value);
}

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

function buildSystem(width: number, height: number) {
	const particles: Particle[] = [];
	const springs: Spring[] = [];
	const columns = clamp(Math.floor(width / 150), 5, 9);
	const rows = clamp(Math.floor(height / 120), 4, 7);

	for (let row = 0; row < rows; row += 1) {
		for (let column = 0; column < columns; column += 1) {
			const index = row * columns + column;
			const rx = seeded(index + 4) - 0.5;
			const ry = seeded(index + 19) - 0.5;
			const normalizedX = columns === 1 ? 0.5 : column / (columns - 1);
			const archLift = Math.sin(normalizedX * Math.PI) * 34;
			const ax = 48 + normalizedX * (width - 96) + rx * 34;
			const ay =
				70 +
				(row / Math.max(rows - 1, 1)) * (height - 140) -
				archLift +
				ry * 26;

			particles.push({
				x: ax + rx * 22,
				y: ay + ry * 22,
				vx: 0,
				vy: 0,
				ax,
				ay,
				mass: 0.8 + seeded(index + 33) * 1.6,
				radius: 1.7 + seeded(index + 51) * 2.6,
				seed: seeded(index + 77) * Math.PI * 2,
			});

			if (column > 0) {
				const previous = index - 1;
				springs.push({
					a: previous,
					b: index,
					rest: Math.hypot(
						particles[index].ax - particles[previous].ax,
						particles[index].ay - particles[previous].ay
					),
					strength: 0.0065,
				});
			}

			if (row > 0) {
				const previousRow = index - columns;
				springs.push({
					a: previousRow,
					b: index,
					rest: Math.hypot(
						particles[index].ax - particles[previousRow].ax,
						particles[index].ay - particles[previousRow].ay
					),
					strength: 0.005,
				});
			}

			if (row > 0 && column > 0 && seeded(index + 91) > 0.46) {
				const diagonal = index - columns - 1;
				springs.push({
					a: diagonal,
					b: index,
					rest: Math.hypot(
						particles[index].ax - particles[diagonal].ax,
						particles[index].ay - particles[diagonal].ay
					),
					strength: 0.0028,
				});
			}
		}
	}

	return { particles, springs };
}

export default function RomePhysicsLayer() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext('2d');
		if (!context) return;

		const reduceMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		let width = 0;
		let height = 0;
		let frame = 0;
		let lastScrollY = window.scrollY;
		let scrollKick = 0;
		let pointerX = -1000;
		let pointerY = -1000;
		let pointerActive = false;
		let system = buildSystem(1, 1);

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * pixelRatio);
			canvas.height = Math.floor(height * pixelRatio);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
			system = buildSystem(width, height);
		};

		const onScroll = () => {
			const nextScrollY = window.scrollY;
			scrollKick += clamp(nextScrollY - lastScrollY, -90, 90) * 0.16;
			lastScrollY = nextScrollY;
		};

		const onPointerMove = (event: PointerEvent) => {
			pointerX = event.clientX;
			pointerY = event.clientY;
			pointerActive = true;
		};

		const onPointerLeave = () => {
			pointerActive = false;
		};

		const drawArches = (progress: number) => {
			context.save();
			context.lineWidth = 1;
			context.strokeStyle = `rgba(232, 183, 94, ${0.05 + progress * 0.02})`;

			const count = clamp(Math.floor(width / 220), 3, 7);
			for (let i = 0; i < count; i += 1) {
				const archWidth = width / (count + 0.7);
				const x = i * archWidth + archWidth * 0.45;
				const archHeight = height * (0.42 + seeded(i + 12) * 0.18);
				const y = height * (0.88 - seeded(i + 22) * 0.08);

				context.beginPath();
				context.moveTo(x, y);
				context.lineTo(x, y - archHeight * 0.55);
				context.quadraticCurveTo(
					x + archWidth * 0.42,
					y - archHeight,
					x + archWidth * 0.84,
					y - archHeight * 0.55
				);
				context.lineTo(x + archWidth * 0.84, y);
				context.stroke();
			}

			context.restore();
		};

		const step = () => {
			const { particles, springs } = system;
			const scrollMax = Math.max(
				1,
				document.documentElement.scrollHeight - window.innerHeight
			);
			const scrollProgress = clamp(window.scrollY / scrollMax, 0, 1);

			context.clearRect(0, 0, width, height);
			drawArches(scrollProgress);

			if (!reduceMotion) {
				for (const spring of springs) {
					const a = particles[spring.a];
					const b = particles[spring.b];
					const dx = b.x - a.x;
					const dy = b.y - a.y;
					const distance = Math.max(0.001, Math.hypot(dx, dy));
					const force = (distance - spring.rest) * spring.strength;
					const fx = (dx / distance) * force;
					const fy = (dy / distance) * force;

					a.vx += fx / a.mass;
					a.vy += fy / a.mass;
					b.vx -= fx / b.mass;
					b.vy -= fy / b.mass;
				}

				for (const particle of particles) {
					const phase = particle.seed + scrollProgress * Math.PI * 6;
					particle.vx += (particle.ax - particle.x) * 0.006;
					particle.vy += (particle.ay - particle.y) * 0.006;
					particle.vx += Math.sin(phase) * scrollKick * 0.006;
					particle.vy += Math.cos(phase * 0.8) * Math.abs(scrollKick) * 0.004;
					particle.vy += 0.012 * particle.mass;

					if (pointerActive) {
						const dx = particle.x - pointerX;
						const dy = particle.y - pointerY;
						const distance = Math.max(24, Math.hypot(dx, dy));
						if (distance < 170) {
							const force = (1 - distance / 170) * 2.2;
							particle.vx += (dx / distance) * force;
							particle.vy += (dy / distance) * force;
						}
					}

					particle.vx *= 0.915;
					particle.vy *= 0.915;
					particle.x += particle.vx;
					particle.y += particle.vy;
				}

				scrollKick *= 0.86;
			}

			context.save();
			context.lineCap = 'round';
			for (const spring of springs) {
				const a = particles[spring.a];
				const b = particles[spring.b];
				const energy = clamp(
					(Math.abs(a.vx) + Math.abs(a.vy) + Math.abs(b.vx) + Math.abs(b.vy)) *
						0.12,
					0,
					1
				);
				context.beginPath();
				context.moveTo(a.x, a.y);
				context.lineTo(b.x, b.y);
				context.lineWidth = 0.7 + energy * 1.3;
				context.strokeStyle = `rgba(47, 140, 149, ${0.12 + energy * 0.24})`;
				context.stroke();
			}
			context.restore();

			for (const particle of particles) {
				const energy = clamp(
					(Math.abs(particle.vx) + Math.abs(particle.vy)) * 0.18,
					0,
					1
				);
				context.beginPath();
				context.arc(
					particle.x,
					particle.y,
					particle.radius + energy * 1.8,
					0,
					Math.PI * 2
				);
				context.fillStyle =
					energy > 0.45
						? `rgba(232, 183, 94, ${0.38 + energy * 0.3})`
						: `rgba(180, 72, 36, ${0.28 + energy * 0.22})`;
				context.fill();
			}

			frame = window.requestAnimationFrame(step);
		};

		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('pointerleave', onPointerLeave);
		frame = window.requestAnimationFrame(step);

		return () => {
			window.cancelAnimationFrame(frame);
			window.removeEventListener('resize', resize);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerleave', onPointerLeave);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-40 h-screen w-screen opacity-70"
		/>
	);
}
