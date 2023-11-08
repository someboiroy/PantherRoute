<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { registerFormSchema, type RegisterFormSchema } from '../../routes/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<RegisterFormSchema>;
</script>

<div class="p-6 mt-2 rounded-md shadow-sm bg-secondary">
	<Form.Root method="POST" action="?/register" {form} schema={registerFormSchema} let:config>
		<Form.Field {config} name="first_name">
			<Form.Item>
				<Form.Label>First Name</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="last_name">
			<Form.Item>
				<Form.Label>Last Name</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>Email</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="pantherID">
			<Form.Item>
				<Form.Label>PantherID</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="password">
			<Form.Item>
				<Form.Label>Password</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="passwordConfirm">
			<Form.Item>
				<Form.Label>Confirm Password</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button>Sign Up</Form.Button>
	</Form.Root>
</div>
