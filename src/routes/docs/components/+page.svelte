<script lang="ts">
	import { Notice } from '$lib';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import { components } from '$lib/components';

	let results = $state(components.toSorted((a, b) => a.name.localeCompare(b.name)));
</script>

<svelte:head>
	<title>Components</title>
</svelte:head>

<div class="flex items-start">
	<main class="min-h-dvh p-5 pt-10 md:px-8 md:py-10">
		<h1>Components</h1>
		<p class="max-w-2xl text-lg">
			The package offers a wide range of standardized electronic component symbols according
			to international standards.
		</p>
		<h2>Components list</h2>
		<Notice title="Component suggestion"
			>This project is just getting started. Component suggestions are welcome and
			appreciated!</Notice
		>
		<span class="h-5"></span>
		<SearchInput items={components} bind:results />
		<div class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
			{#each results as component}
				<a
					href="/circuitor/docs/components/"
					class="dark:border-neutral-border group overflow-hidden rounded-lg border border-neutral-200 text-current! decoration-0! hover:shadow-xs"
				>
					<img
						src={component.image}
						alt={component.name}
						class="dark:border-neutral-border h-32 w-full overflow-hidden border-b border-neutral-200 object-cover transition group-hover:scale-103"
					/>
					<div class="p-3">
						<h3 class="font-medium decoration-0">{component.name}</h3>
						<p class="mb-0! text-sm text-gray-700 decoration-0 dark:text-gray-200">
							{component.category}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</main>
	<div class="relative hidden h-full w-72 flex-none p-5 md:block"></div>
</div>
