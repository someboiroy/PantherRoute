import { pb } from '$lib/db';
import type { Handle } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = pb;
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = null;
	}

	const response = await resolve(event);

	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: false })
	);

	return response;
};
