<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { incidentFormSchema, type IncidentFormSchema } from '../../routes/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<IncidentFormSchema>;
</script>

<div class="p-4 m-6 rounded-md bg-secondary">
	<div class="grid grid-cols-1 gap-4">
		<Form.Root method="POST" action="?/report" {form} schema={incidentFormSchema} let:config>
			<Form.Field {config} name="first_name">
				<Form.Item class="">
					<Form.Label>First Name</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="last_name">
				<Form.Item class="">
					<Form.Label>Last Name</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="email">
				<Form.Item class="">
					<Form.Label>Email</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="pantherID">
				<Form.Item class="">
					<Form.Label>PantherID</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="report">
				<Form.Item>
					<Form.Label class="text-lg font-bold">Report:</Form.Label>
					<Form.FormTextarea class="bg-white" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</Form.Root>
	</div>
</div>
