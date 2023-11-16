import type { PageServerLoad, Actions } from './$types';
import { fail, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { loginFormSchema, registerFormSchema } from './schema';
import { _createNewUser, _loginUser } from '$lib/db';

export const load: PageServerLoad = ({ locals }) => {
	return {
		loginForm: superValidate(loginFormSchema),
		registerForm: superValidate(registerFormSchema),
		isLoggedIn: locals.pb.authStore.isValid ? true : false
	};
};

export const actions: Actions = {
	login: async (event) => {
		const form = await superValidate(event, loginFormSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			const response = await _loginUser(form.data.email, form.data.password);
			console.log('login response:', response);
		} catch (err) {
			console.log('Error:', err);
			throw error(500, 'Something went wrong while logging in.');
		}
		throw redirect(303, '/home');
	},
	register: async (event) => {
		const form = await superValidate(event, registerFormSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const response = await _createNewUser(form.data);
			console.log('register response:', response);
			try {
				await _loginUser(form.data.email, form.data.password);
				throw redirect(303, '/home');
			} catch (err) {
				console.log('Error:', err);
				throw error(500, 'Something went wrong while logging in.');
			}
		} catch (err) {
			console.log('Error:', err);
			throw error(500, 'Something went wrong while creating your account.');
		}
	}
};
