import { createClient } from '@vercel/edge-config';
import { redirect } from '@sveltejs/kit';
import { EDGE_CONFIG } from '$env/static/private';

export async function load(event) {
	// Option B: duplicate the logic from middleware in the root layout server load function
	const url = new URL(event.url);
	const store = createClient(EDGE_CONFIG);
	const redirects = (await store.get<Record<string, string>>('redirects')) || {};
	const newLocation = redirects[url.pathname];
	if (newLocation) {
		redirect(307, newLocation + url.search);
	}
}
