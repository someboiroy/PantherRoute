<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { loginFormSchema, type LoginFormSchema } from '../../routes/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<LoginFormSchema>;
</script>

<div class="p-6 mt-2 rounded-md shadow-sm bg-secondary">
	<Form.Root method="POST" action="?/login" {form} schema={loginFormSchema} let:config>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>Email</Form.Label>
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
		<Form.Button>Login</Form.Button>
	</Form.Root>
</div>
