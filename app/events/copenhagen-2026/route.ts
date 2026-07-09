import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
	const htmlPath = path.join(
		process.cwd(),
		'public',
		'events',
		'copenhagen-2026',
		'index.html'
	);
	const html = await readFile(htmlPath, 'utf8');

	return new Response(
		html.replace(
			'<head>',
			'<head>\n    <base href="/events/copenhagen-2026/">'
		),
		{
			headers: {
				'content-type': 'text/html; charset=utf-8',
			},
		}
	);
}
