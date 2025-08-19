import { get } from '@vercel/edge-config';

// Option A: use server side route resolution with middleware
export default async function middleware(req: Request) {
	const url = new URL(req.url);
	const isRouteResolution = url.pathname.endsWith('/__route.js');
	if (isRouteResolution) {
		url.pathname = url.pathname.replace('/__route.js', '');
	}
	const redirects = (await get<Record<string, string>>('redirects')) || {};
	const newLocation = redirects[url.pathname];

	if (newLocation) {
		return new Response(null, {
			status: 307,
			headers: {
				Location: newLocation + (isRouteResolution ? '/__route.js' : '') + url.search
			}
		});
	}
}
