<script lang="ts">
	import type { PageData } from './$types';
	import { onMount, onDestroy } from 'svelte';

	export let data: PageData;

	// todays full calendar date
	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	let currentTime = new Date().toLocaleTimeString();

	const interval = setInterval(() => {
		currentTime = new Date().toLocaleTimeString();
	}, 1000);

	onMount(() => {
		interval;
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="w-full px-4 py-8 md:p-12">
	<div class="max-w-md mx-auto space-y-6">
		<h1 class="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50">
			{today} Shuttle Route Schedule
		</h1>
		<ul class="divide-y divide-zinc-200 dark:divide-zinc-800">
			<li class="flex items-center justify-between py-4">
				<span class="text-sm font-medium md:text-lg text-zinc-600 dark:text-zinc-300">
					8:00 AM
				</span>
				<div class="flex items-center">
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
						class="w-5 h-5 mr-2 text-zinc-900 dark:text-zinc-50"
						><path d="m4 6 8-4 8 4" /><path
							d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"
						/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" /><path d="M18 5v17" /><path
							d="M6 5v17"
						/><circle cx="12" cy="9" r="2" /></svg
					><span class="flex-none text-sm font-medium md:text-lg text-zinc-900 dark:text-zinc-50">
						John B. Coleman Library
					</span>
				</div>
			</li>
			<li class="flex items-center justify-between py-4">
				<span class="text-sm font-medium md:text-lg text-zinc-600 dark:text-zinc-300">
					9:00 AM
				</span>
				<div class="flex items-center">
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
						class="w-5 h-5 mr-2 text-zinc-900 dark:text-zinc-50"
						><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
							points="9 22 9 12 15 12 15 22"
						/></svg
					><span class="flex-none text-sm font-medium md:text-lg text-zinc-900 dark:text-zinc-50">
						University Square
					</span>
				</div>
			</li>
			<li class="flex items-center justify-between py-4">
				<span class="text-sm font-medium md:text-lg text-zinc-600 dark:text-zinc-300">
					10:00 AM
				</span>
				<div class="flex items-center">
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
						class="w-5 h-5 mr-2 text-zinc-900 dark:text-zinc-50"
						><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg
					><span class="flex-none text-sm font-medium md:text-lg text-zinc-900 dark:text-zinc-50">
						S.R. Collins
					</span>
				</div>
			</li>
			<li class="flex items-center justify-between py-4">
				<span class="text-sm font-medium md:text-lg text-zinc-600 dark:text-zinc-300">
					11:00 AM
				</span>
				<div class="flex items-center">
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
						class="w-5 h-5 mr-2 text-zinc-900 dark:text-zinc-50"
						><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
							x1="4"
							x2="20"
							y1="18"
							y2="18"
						/></svg
					><span class="flex-none text-sm font-medium md:text-lg text-zinc-900 dark:text-zinc-50">
						Memorial Student Center
					</span>
				</div>
			</li>
			<li class="flex items-center justify-between py-4">
				<span class="text-sm font-medium md:text-lg text-zinc-600 dark:text-zinc-300">
					12:00 PM
				</span>
				<div class="flex items-center">
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
						class="w-5 h-5 mr-2 text-zinc-900 dark:text-zinc-50"
						><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line
							x1="4"
							x2="4"
							y1="22"
							y2="15"
						/></svg
					><span class="flex-none text-sm font-medium md:text-lg text-zinc-900 dark:text-zinc-50">
						William J. Nicks Building
					</span>
				</div>
			</li>
			<li class="flex items-center justify-between py-4">
				<span class="text-sm font-medium md:text-lg text-zinc-600 dark:text-zinc-300">
					1:00 PM
				</span>
				<div class="flex items-center">
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
						class="w-5 h-5 mr-2 text-zinc-900 dark:text-zinc-50"
						><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle
							cx="18"
							cy="16"
							r="3"
						/></svg
					><span class="flex-none text-sm font-medium md:text-lg text-zinc-900 dark:text-zinc-50">
						Hobart Taylor Building
					</span>
				</div>
			</li>
		</ul>
		<span class="text-lg italic font-bold">
			Current Time: {currentTime}
		</span>
	</div>
</section>
