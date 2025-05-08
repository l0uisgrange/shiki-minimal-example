<script lang="ts">
	import { Notice } from '$lib';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import { components } from '$lib/components';

	let results = $state(components);
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
		<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each results as component}
				<div class="rounded-md border p-4 transition-shadow hover:shadow-md">
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100"
						>
							<img src={component.image} alt={component.name} class="h-6 w-6" />
						</div>
						<div>
							<h3 class="font-medium">{component.name}</h3>
							<p class="text-sm text-gray-500">{component.category}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</main>
	<div class="relative hidden h-full w-72 flex-none p-5 md:block"></div>
</div>
