<script lang="ts">
	import type { PageData } from './$types';

	import LoginForm from '$lib/custom-components/LoginForm.svelte';
	import SignUpForm from '$lib/custom-components/SignUpForm.svelte';
	import { fade } from 'svelte/transition';
	export let data: PageData;

	let needSignUp = false;

	function toggleSignUp() {
		needSignUp = !needSignUp;
	}
</script>

<div class="flex items-center justify-center h-screen">
	<div class="">
		<h1 class="text-4xl italic font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
			Welcome to <span class=" text-primary">
				PantherRoute.
				<span />
			</span>
		</h1>

		{#if needSignUp}
			<div in:fade>
				<LoginForm form={data.loginForm} />
				<div class="flex justify-center">
					<button class="text-primary" on:click={toggleSignUp}> First Time here? </button>
				</div>
			</div>
		{:else}
			<div in:fade>
				<SignUpForm form={data.registerForm} />
				<div class="flex justify-center">
					<button class="text-primary" on:click={toggleSignUp}> Already have an account? </button>
				</div>
			</div>
		{/if}
	</div>
</div>
