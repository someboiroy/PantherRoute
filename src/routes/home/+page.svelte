<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/ui/button/button.svelte';
	import FeatureCards from '$lib/custom-components/FeatureCards.svelte';
	import { _logoutUser } from '$lib/db';
	export let data: PageData;
	export const user = data.user;
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/pEAP2wvvHs2
-->
<!--
// v0 by Vercel.
// https://v0.dev/t/tqp1hDrJzbc
-->

<div class="flex flex-col min-h-screen bg-gray-100">
	<header class="flex items-center justify-between px-4 py-2 text-white bg-primary sm:px-6 sm:py-4">
		<div class="flex items-center space-x-2 sm:space-x-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-6 h-6 sm:w-8 sm:h-8"
			>
				<path d="M8 6v6" />
				<path d="M15 6v6" />
				<path d="M2 12h19.6" />
				<path
					d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
				/>
				<circle cx="7" cy="18" r="2" />
				<path d="M9 18h5" />
				<circle cx="16" cy="18" r="2" />
			</svg>
			<span class="text-sm font-semibold sm:text-lg">PantherRoute</span>
		</div>
		<button aria-label="Menu" class="sm:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-6 h-6 text-white"
			>
				<line x1="4" x2="20" y1="12" y2="12" />
				<line x1="4" x2="20" y1="6" y2="6" />
				<line x1="4" x2="20" y1="18" y2="18" />
			</svg>
		</button>
		<nav class="items-center hidden space-x-4 sm:flex">
			<a class="text-sm font-medium sm:text-base" href="#"> Home </a>
			<a class="text-sm font-medium sm:text-base" href="#"> Schedule </a>
			<a class="text-sm font-medium sm:text-base" href="#"> Routes </a>
			<a class="text-sm font-medium sm:text-base" href="#"> Fares </a>
			<a class="text-sm font-medium sm:text-base" href="#"> Contact </a>
			<form action="/logout" method="POST">
				<Button class="text-sm font-medium bg-red-500 sm:text-base" type="submit">Logout</Button>
			</form>
		</nav>
	</header>
	<main class="" />
	<FeatureCards />
</div>
