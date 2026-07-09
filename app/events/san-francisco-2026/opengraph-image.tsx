import { ImageResponse } from 'next/og';

export const alt =
	'AI as a Catalyst — Reimagining Health Innovation. May 1–2, 2026, San Francisco Bay Area.';

// Render at 4x the standard 1200x630 OG size (4800x2520) for ultra-crisp
// rendering on retina displays and downscaled previews. All layout values
// below are written at 1x and multiplied by SCALE.
const SCALE = 4;
const px = (n: number) => `${n * SCALE}px`;

export const size = {
	width: 1200 * SCALE,
	height: 630 * SCALE,
};

export const contentType = 'image/png';

// Fetch WOFF fonts from fontsource on jsdelivr. Satori supports TTF/OTF/WOFF
// (not WOFF2), and this CDN reliably serves WOFF files.
async function loadFont(url: string) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch font: ${res.status} ${url}`);
	return res.arrayBuffer();
}

export default async function Image() {
	let fonts: Array<{
		name: string;
		data: ArrayBuffer;
		weight: 700 | 900;
		style: 'normal';
	}> = [];

	try {
		const [bold, black] = await Promise.all([
			loadFont(
				'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-700-normal.woff'
			),
			loadFont(
				'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-900-normal.woff'
			),
		]);
		fonts = [
			{ name: 'Inter', data: bold, weight: 700, style: 'normal' },
			{ name: 'Inter', data: black, weight: 900, style: 'normal' },
		];
	} catch (err) {
		console.error('Failed to load Inter font for OG image:', err);
	}

	const fontFamily = fonts.length ? 'Inter' : 'sans-serif';

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					padding: `${px(60)} ${px(72)} ${px(80)}`,
					backgroundColor: '#000000',
					position: 'relative',
					fontFamily,
				}}
			>
				{/* Amber glow — top right */}
				<div
					style={{
						position: 'absolute',
						top: px(-220),
						right: px(-220),
						width: px(720),
						height: px(720),
						backgroundImage:
							'radial-gradient(circle at center, rgba(217, 119, 6, 0.42), transparent 65%)',
						display: 'flex',
					}}
				/>
				{/* Red glow — bottom left */}
				<div
					style={{
						position: 'absolute',
						bottom: px(-260),
						left: px(-260),
						width: px(680),
						height: px(680),
						backgroundImage:
							'radial-gradient(circle at center, rgba(185, 28, 28, 0.34), transparent 65%)',
						display: 'flex',
					}}
				/>

				{/* Kicker */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: px(20),
					}}
				>
					<div
						style={{
							height: px(2),
							width: px(72),
							backgroundColor: 'rgba(217, 119, 6, 0.8)',
							display: 'flex',
						}}
					/>
					<div
						style={{
							fontSize: px(22),
							letterSpacing: px(6),
							color: 'rgba(251, 191, 36, 1)',
							fontWeight: 700,
							textTransform: 'uppercase',
							display: 'flex',
						}}
					>
						MIT Critical Data presents
					</div>
				</div>

				{/* Title */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: px(28),
					}}
				>
					<div
						style={{
							fontSize: px(116),
							fontWeight: 900,
							letterSpacing: px(-5),
							lineHeight: 1,
							color: '#ffffff',
							display: 'flex',
							paddingBottom: px(6),
						}}
					>
						AI as a
					</div>
					<div
						style={{
							fontSize: px(116),
							fontWeight: 900,
							letterSpacing: px(-5),
							lineHeight: 1,
							marginLeft: px(68),
							paddingBottom: px(18),
							backgroundImage:
								'linear-gradient(90deg, #ef4444 0%, #f59e0b 50%, #fb923c 100%)',
							backgroundClip: 'text',
							color: 'transparent',
							display: 'flex',
						}}
					>
						Catalyst.
					</div>
				</div>

				{/* Subtitle */}
				<div
					style={{
						fontSize: px(32),
						fontWeight: 700,
						color: 'rgba(255, 255, 255, 0.95)',
						marginTop: px(28),
						marginLeft: px(72),
						display: 'flex',
						letterSpacing: px(-0.5),
					}}
				>
					Reimagining Health Innovation
				</div>

				{/* Meta row */}
				<div
					style={{
						display: 'flex',
						gap: px(16),
						marginTop: px(10),
						marginLeft: px(72),
						fontSize: px(22),
						color: 'rgba(255, 255, 255, 0.6)',
						fontWeight: 700,
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex' }}>May 1–2, 2026</div>
					<div
						style={{
							display: 'flex',
							color: 'rgba(255, 255, 255, 0.3)',
						}}
					>
						·
					</div>
					<div style={{ display: 'flex' }}>San Francisco Bay Area</div>
					<div
						style={{
							display: 'flex',
							color: 'rgba(255, 255, 255, 0.3)',
						}}
					>
						·
					</div>
					<div
						style={{
							display: 'flex',
							color: 'rgba(251, 191, 36, 1)',
							fontWeight: 900,
						}}
					>
						Free to attend
					</div>
				</div>

				{/* Hosts — bottom */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: 'auto',
					}}
				>
					<div
						style={{
							fontSize: px(15),
							letterSpacing: px(5),
							color: 'rgba(251, 191, 36, 0.85)',
							fontWeight: 700,
							textTransform: 'uppercase',
							display: 'flex',
							marginBottom: px(12),
						}}
					>
						Hosted by
					</div>
					<div
						style={{
							display: 'flex',
							gap: px(24),
							fontSize: px(32),
							fontWeight: 900,
							color: '#ffffff',
							letterSpacing: px(-1.5),
							lineHeight: 1.2,
							alignItems: 'center',
						}}
					>
						<div style={{ display: 'flex' }}>MIT</div>
						<div
							style={{
								display: 'flex',
								color: 'rgba(217, 119, 6, 0.55)',
								fontWeight: 700,
							}}
						>
							/
						</div>
						<div style={{ display: 'flex' }}>Stanford</div>
						<div
							style={{
								display: 'flex',
								color: 'rgba(217, 119, 6, 0.55)',
								fontWeight: 700,
							}}
						>
							/
						</div>
						<div style={{ display: 'flex' }}>Threshold Ventures</div>
					</div>
				</div>
			</div>
		),
		{
			...size,
			fonts: fonts.length > 0 ? fonts : undefined,
		}
	);
}
