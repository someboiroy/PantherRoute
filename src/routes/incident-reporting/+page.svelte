<script lang="ts">
	import type { PageData } from './$types';
	import IncidentForm from '$lib/custom-components/IncidentForm.svelte';
	export let data: PageData;
</script>

<div>
	<IncidentForm form={data.incidentForm} />
</div>
