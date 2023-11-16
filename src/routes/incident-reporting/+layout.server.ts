import type { LayoutServerLoad } from './$types';

import type { user } from '$lib/types';

export const load = (async ({ locals }) => {
	let user: user | null = null;
	if (locals.user) {
		user = {
			email: locals.user.email,
			first_name: locals.user.first_name,
			last_name: locals.user.last_name,
			pantherID: locals.user.pantherID,
			username: locals.user.username
		};
	}
	return {
		user
	};
}) satisfies LayoutServerLoad;
