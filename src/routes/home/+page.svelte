<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="flex-grow p-4 m-2">
	<a href="/today" class="p-4">
		<Card.Root class="hover:bg-violet-400/20">
			<Card.Header>
				<Card.Title>See Today's Schedule</Card.Title>
				<Card.Description>
					Explore today's shuttle schedule and stay ahead of your plans. Know precisely where and
					when to catch your ride.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</a>
	<a href="/incident-reporting" class="p-4">
		<Card.Root class="hover:bg-purple-200">
			<Card.Header>
				<Card.Title>Incident Reporting</Card.Title>
				<Card.Description
					>Your safety is our priority. Report any incidents swiftly to help us ensure a secure
					travel experience for all.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</a>
	<a href="/home" class="p-4 cursor-default">
		<Card.Root class="bg-muted">
			<Card.Header>
				<Card.Title
					>Live Map <span class="text-xs italic text-purple-400/50">
						(Coming Soon)
					</span></Card.Title
				>
				<Card.Description>
					Track the shuttle in real-time. Never miss an update and make your travel smoother.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</a>
	<a href="/home" class="p-4 cursor-default">
		<Card.Root class="bg-muted">
			<Card.Header>
				<Card.Title
					>Seat Reservations <span class="text-xs italic text-purple-400/50">
						(Coming Soon)
					</span></Card.Title
				>
				<Card.Description
					>Guarantee your spot on the shuttle. Travel with peace of mind, knowing there's a seat
					with your name on it.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</a>

	<Separator class="my-4" />

	<p class="text-sm font-normal">
		Navigate PVAMU with ease: Get the latest shuttle schedules, report incidents quickly, and
		anticipate new features for a smoother campus commute. Your journey, simplified.
		<br />

		<span class="inline-block mt-2 text-xs font-normal text-gray-400">
			From Team Cyborg$ with <span class="text-red-500">❤</span>
		</span>
	</p>
</div>
