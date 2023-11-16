<script>
	import '../app.postcss';
	import SiteContainer from '$lib/custom-components/SiteContainer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<SiteContainer />
	<slot />
</div>
