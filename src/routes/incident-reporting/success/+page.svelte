<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
	<h1 class="mb-8 text-4xl font-bold text-center">
		Thank you for your report submission {data.user?.first_name}!
	</h1>
	<p class="mb-8 text-lg text-center">We appreciate your help in keeping PVAMU safe.</p>
	<a href="/home" class="py-2 font-bold hover:text-purple-200"> Return to Home Page </a>
</main>

<style>
	a {
		transition: all 0.2s ease-in-out;
	}

	a:hover {
		transform: scale(1.05);
	}
</style>
