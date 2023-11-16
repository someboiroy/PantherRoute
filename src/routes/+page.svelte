<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from '$lib/custom-components/LoginForm.svelte';
	import SignUpForm from '$lib/custom-components/SignUpForm.svelte';
	import { fade } from 'svelte/transition';
	export let data: PageData;
	export let loggedIn = data.isLoggedIn;

	let needSignUp = true;

	function toggleSignUp() {
		needSignUp = !needSignUp;
	}
</script>

<div class="flex items-center justify-center h-screen">
	{#if loggedIn}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
			<div
				class="relative z-10 w-full max-w-lg mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-zinc-800 sm:w-96 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl md:mx-auto md:my-auto"
			>
				<div class="p-6">
					<h2 class="text-2xl font-bold">Whoops ...</h2>
					<p class="mt-2 text-gray-500 dark:text-zinc-400">
						It looks like you are already logged in. Click below to go to the home page.
					</p>
				</div>
				<div class="flex justify-end p-6 border-t border-gray-200 dark:border-zinc-700">
					<a
						class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-zinc-50 hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
						href="/home"
					>
						Go to Home
					</a>
				</div>
			</div>
		</div>
	{/if}
	<div class="w-full px-4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
		<h1 class="text-4xl italic font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
			Welcome to <span class=" text-primary">
				PantherRoute.
				<span />
			</span>
		</h1>

		{#if needSignUp}
			<div class="w-full" in:fade>
				<LoginForm form={data.loginForm} />
				<div class="flex justify-center">
					<button class="text-primary" on:click={toggleSignUp}> First Time here? </button>
				</div>
			</div>
		{:else}
			<div class="w-full" in:fade>
				<SignUpForm form={data.registerForm} />
				<div class="flex justify-center">
					<button class="text-primary" on:click={toggleSignUp}> Already have an account? </button>
				</div>
			</div>
		{/if}
	</div>
</div>
