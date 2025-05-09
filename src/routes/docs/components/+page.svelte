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
			to IEC 60616 and IEEE/ANSI 315-1975 standards.
		</p>
		<h2>Components list</h2>
		<Notice title="Component suggestion"
			>This project is just getting started. Component suggestions are welcome and
			appreciated!</Notice
		>
		<span class="h-5"></span>
		<SearchInput items={components} bind:results />
		<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{#each results as component}
				<a
					href="/circuitor/docs/components/"
					class="dark:border-neutral-border group rounded-xl border border-neutral-200 p-2.5 text-current! decoration-0! hover:shadow-xs"
				>
					<img
						src={component.image}
						alt={component.name}
						class="dark:border-neutral-border mb-3 w-full scale-100 overflow-hidden rounded-lg border border-neutral-200 transition group-hover:scale-103"
					/>
					<div>
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
