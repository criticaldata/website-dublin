'use client';

import { useEffect, useRef } from 'react';

type Body = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	homeX: number;
	homeY: number;
	radius: number;
	mass: number;
	hue: number;
	phase: number;
};

type Link = {
	a: number;
	b: number;
	length: number;
	tension: number;
};

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

function noise(index: number) {
	const value = Math.sin(index * 73.91 + 19.37) * 9517.218;
	return value - Math.floor(value);
}

function makeBodies(width: number, height: number) {
	const bodies: Body[] = [];
	const links: Link[] = [];
	const rings = Math.max(3, Math.min(5, Math.floor(width / 270)));
	const count = rings * 9;
	const centerX = width * 0.52;
	const centerY = height * 0.45;

	for (let i = 0; i < count; i += 1) {
		const ring = Math.floor(i / 9);
		const item = i % 9;
		const angle = item * ((Math.PI * 2) / 9) + ring * 0.38;
		const radius = Math.min(width, height) * (0.16 + ring * 0.065);
		const homeX =
			centerX + Math.cos(angle) * radius + (noise(i + 4) - 0.5) * 48;
		const homeY =
			centerY + Math.sin(angle) * radius * 0.72 + (noise(i + 8) - 0.5) * 42;

		bodies.push({
			x: homeX,
			y: homeY,
			vx: 0,
			vy: 0,
			homeX,
			homeY,
			radius: 2.2 + noise(i + 12) * 3.5,
			mass: 0.7 + noise(i + 16) * 1.6,
			hue: noise(i + 20),
			phase: noise(i + 24) * Math.PI * 2,
		});
	}

	for (let i = 0; i < bodies.length; i += 1) {
		const next = Math.floor(i / 9) * 9 + ((i + 1) % 9);
		if (next < bodies.length) {
			links.push({
				a: i,
				b: next,
				length: Math.hypot(
					bodies[i].homeX - bodies[next].homeX,
					bodies[i].homeY - bodies[next].homeY
				),
				tension: 0.006,
			});
		}

		if (i + 9 < bodies.length) {
			links.push({
				a: i,
				b: i + 9,
				length: Math.hypot(
					bodies[i].homeX - bodies[i + 9].homeX,
					bodies[i].homeY - bodies[i + 9].homeY
				),
				tension: 0.004,
			});
		}
	}

	return { bodies, links };
}

export default function RomeRegisterPhysics() {
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
		let raf = 0;
		let time = 0;
		let lastScroll = window.scrollY;
		let scrollForce = 0;
		let pointerX = -1000;
		let pointerY = -1000;
		let pointerInside = false;
		let system = makeBodies(1, 1);

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			const ratio = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * ratio);
			canvas.height = Math.floor(height * ratio);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			context.setTransform(ratio, 0, 0, ratio, 0, 0);
			system = makeBodies(width, height);
		};

		const onScroll = () => {
			const next = window.scrollY;
			scrollForce += clamp(next - lastScroll, -120, 120) * 0.12;
			lastScroll = next;
		};

		const onPointerMove = (event: PointerEvent) => {
			pointerX = event.clientX;
			pointerY = event.clientY;
			pointerInside = true;
		};

		const onPointerLeave = () => {
			pointerInside = false;
		};

		const drawMarbleLines = (scrollProgress: number) => {
			context.save();
			context.lineWidth = 1;
			for (let i = 0; i < 7; i += 1) {
				const y = height * (0.12 + i * 0.14) + Math.sin(time * 0.01 + i) * 18;
				context.beginPath();
				context.moveTo(-40, y);
				context.bezierCurveTo(
					width * 0.24,
					y - 80,
					width * 0.62,
					y + 90,
					width + 40,
					y - 20
				);
				context.strokeStyle = `rgba(236, 215, 179, ${0.035 + scrollProgress * 0.025})`;
				context.stroke();
			}
			context.restore();
		};

		const tick = () => {
			time += 1;
			const maxScroll = Math.max(
				1,
				document.documentElement.scrollHeight - window.innerHeight
			);
			const scrollProgress = clamp(window.scrollY / maxScroll, 0, 1);
			const { bodies, links } = system;

			context.clearRect(0, 0, width, height);
			drawMarbleLines(scrollProgress);

			if (!reduceMotion) {
				for (const link of links) {
					const a = bodies[link.a];
					const b = bodies[link.b];
					const dx = b.x - a.x;
					const dy = b.y - a.y;
					const distance = Math.max(0.001, Math.hypot(dx, dy));
					const force = (distance - link.length) * link.tension;
					const fx = (dx / distance) * force;
					const fy = (dy / distance) * force;

					a.vx += fx / a.mass;
					a.vy += fy / a.mass;
					b.vx -= fx / b.mass;
					b.vy -= fy / b.mass;
				}

				for (const body of bodies) {
					body.vx += (body.homeX - body.x) * 0.006;
					body.vy += (body.homeY - body.y) * 0.006;
					body.vx += Math.sin(body.phase + time * 0.018) * 0.018;
					body.vy +=
						Math.cos(body.phase + scrollProgress * 6) * scrollForce * 0.004;
					body.vy += 0.01 * body.mass;

					if (pointerInside) {
						const dx = body.x - pointerX;
						const dy = body.y - pointerY;
						const distance = Math.max(20, Math.hypot(dx, dy));
						if (distance < 190) {
							const push = (1 - distance / 190) * 2.8;
							body.vx += (dx / distance) * push;
							body.vy += (dy / distance) * push;
						}
					}

					body.vx *= 0.91;
					body.vy *= 0.91;
					body.x += body.vx;
					body.y += body.vy;
				}

				scrollForce *= 0.86;
			}

			for (const link of links) {
				const a = bodies[link.a];
				const b = bodies[link.b];
				const speed = clamp(
					(Math.abs(a.vx) + Math.abs(a.vy) + Math.abs(b.vx) + Math.abs(b.vy)) *
						0.1,
					0,
					1
				);
				context.beginPath();
				context.moveTo(a.x, a.y);
				context.lineTo(b.x, b.y);
				context.lineWidth = 0.75 + speed * 1.3;
				context.strokeStyle = `rgba(157, 208, 211, ${0.12 + speed * 0.24})`;
				context.stroke();
			}

			for (const body of bodies) {
				const speed = clamp(
					(Math.abs(body.vx) + Math.abs(body.vy)) * 0.22,
					0,
					1
				);
				context.beginPath();
				context.arc(body.x, body.y, body.radius + speed * 2, 0, Math.PI * 2);
				context.fillStyle =
					body.hue > 0.66
						? `rgba(232, 183, 94, ${0.36 + speed * 0.32})`
						: body.hue > 0.34
							? `rgba(180, 72, 36, ${0.34 + speed * 0.28})`
							: `rgba(157, 208, 211, ${0.3 + speed * 0.26})`;
				context.fill();
			}

			raf = window.requestAnimationFrame(tick);
		};

		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('pointerleave', onPointerLeave);
		raf = window.requestAnimationFrame(tick);

		return () => {
			window.cancelAnimationFrame(raf);
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
			className="pointer-events-none fixed inset-0 z-10 h-screen w-screen opacity-75"
		/>
	);
}
