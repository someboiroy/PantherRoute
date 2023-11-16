<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { _logoutUser } from '$lib/db';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const currentPage = derived(page, ($page) => $page.url.pathname);
</script>

{#if $currentPage !== '/'}
	<div>
		<header
			class="flex items-center justify-between px-4 py-2 text-white bg-primary sm:px-6 sm:py-4"
		>
			<div>
				<a href="/home" class="flex items-center space-x-2 sm:space-x-4">
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
				</a>
			</div>
			<nav class="items-center hidden space-x-4 sm:flex">
				<a
					class="text-sm font-medium sm:text-base"
					href="/today"
					class:active={$currentPage === '/today'}
				>
					Today's Schedule
				</a>
				<a
					class="text-sm font-medium sm:text-base"
					href="/incident-reporting"
					class:active={$currentPage === '/incident-reporting'}
				>
					Incident Reporting
				</a>

				<span class="text-sm font-medium opacity-70 sm:text-base"> Live Map </span>
				<span class="text-sm font-medium sm:text-base opacity-70"> Seat Reservations </span>
				<form action="/logout" method="POST">
					<Button
						size={'sm'}
						class="text-sm font-medium text-black bg-white sm:text-base"
						type="submit">Logout</Button
					>
				</form>
			</nav>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="md:hidden" aria-label="Menu">
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
					</svg></DropdownMenu.Trigger
				>
				<DropdownMenu.Content class="flex flex-col bg-white shadow-lg ">
					<DropdownMenu.Group
						><a class="font-medium sm:text-xs" href="/home" class:active={$currentPage === '/home'}>
							<DropdownMenu.Item>Home</DropdownMenu.Item></a
						>
						<DropdownMenu.Item>
							<a
								class="font-medium sm:text-xs"
								href="/today"
								class:active={$currentPage === '/today'}
							>
								Today's Schedule
							</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a
								class="font-medium sm:text-xs"
								href="/incident-reporting"
								class:active={$currentPage === '/incident-reporting'}
							>
								Incident Reporting
							</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<span class="font-medium line-through sm:text-xs opacity-70"> Live Map </span>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<span class="font-medium line-through sm:text-xs opacity-70">
								Seat Reservations
							</span>
						</DropdownMenu.Item>
						<DropdownMenu.Item class="">
							<form action="/logout" class="" method="POST">
								<Button size="sm" class="" type="submit">Logout</Button>
							</form>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
	</div>
{/if}

<style>
	.active {
		display: none;
		visibility: hidden;
	}
</style>
