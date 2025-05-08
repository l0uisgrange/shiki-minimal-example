<script lang="ts">
	import { onMount } from 'svelte';
	import Fuse from 'fuse.js';
	import type { Component } from '$lib/components';

	let { items, results = $bindable() } = $props();

	let searchQuery = $state('');
	let fuse: Fuse<Component>;

	onMount(() => {
		fuse = new Fuse(items, {
			keys: ['name', 'category'],
			threshold: 0.3,
			distance: 100,
			includeScore: true
		});
		results = items;
	});

	$effect(() => {
		if (!searchQuery.trim()) {
			results = items;
			return;
		}
		const searchResults = fuse.search(searchQuery);
		results = searchResults.map((result) => result.item);
	});
</script>

<div class="w-full">
	<div class="relative">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search components by name or category..."
			class="dark:border-neutral-border w-full rounded-md border border-neutral-200 px-3 py-1.5 subpixel-antialiased focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
		/>
		{#if searchQuery.trim()}
			<button
				class="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
				onclick={() => (searchQuery = '')}
			>
				✕
			</button>
		{/if}
	</div>
</div>
