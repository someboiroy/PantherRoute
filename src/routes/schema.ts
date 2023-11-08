import { z } from 'zod';

const loginFormSchema = z.object({
	email: z
		.string()
		.email()
		.refine((val) => val.endsWith('@pvamu.edu'), {
			message: 'Must login with PVAMU email.'
		}),
	password: z
		.string()
		.min(8)
		.regex(
			/^(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one uppercase letter and one number'
		)
});

const registerFormSchema = z
	.object({
		first_name: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
		last_name: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),

		email: z
			.string()
			.email()
			.refine((val) => val.endsWith('@pvamu.edu'), {
				message: 'Must register with PVAMU email.'
			}),
		password: z
			.string()
			.min(8)
			.regex(
				/^(?=.*[A-Z])(?=.*\d)/,
				'Password must contain at least one uppercase letter and one number'
			),
		passwordConfirm: z.string().min(9),
		pantherID: z.string().regex(/^[P][A-Z0-9]{8}$/, {
			message: 'Your PantherID should start with a capitalized P followed by 8 numbers.'
		})
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: 'Passwords do not match.',
		path: ['passwordConfirm']
	});

export { loginFormSchema, registerFormSchema };
export type LoginFormSchema = typeof loginFormSchema;
export type RegisterFormSchema = typeof registerFormSchema;
