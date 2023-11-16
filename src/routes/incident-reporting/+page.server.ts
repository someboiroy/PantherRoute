import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { incidentFormSchema } from '../../routes/schema';
import { fail, redirect, error } from '@sveltejs/kit';
import { _submitIncidentReport } from '$lib/db';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}

	return {
		incidentForm: superValidate(incidentFormSchema)
	};
};

export const actions: Actions = {
	report: async (event) => {
		const form = await superValidate(event, incidentFormSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			const response = await _submitIncidentReport(form.data);

			console.log('incident response:', response);
		} catch (err) {
			console.log('Error:', err);
			throw error(500, 'Something went wrong while submitting your incident report.');
		}

		if (form.valid) {
			throw redirect(303, '/incident-reporting/success');
		}
	}
};
