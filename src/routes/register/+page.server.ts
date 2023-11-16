import type { Actions } from './$types';
import { fail, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { registerFormSchema } from '../schema';
import { _createNewUser, _loginUser } from '$lib/db';

export const actions: Actions = {
	register: async (event) => {
		const form = await superValidate(event, registerFormSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const response = await _createNewUser(form.data);
			console.log('register response:', response);
			// Assuming _loginUser sets some session or cookie for logged-in state.
			await _loginUser(form.data.email, form.data.password);
			// Instead of throwing redirect, return it
			throw redirect(303, '/home');
		} catch (err) {
			console.log('Error:', err);
			// Provide the error message to the error function for better debugging
			return error(500, `Something went wrong while creating your account: ${err}`);
		}
	}
};
