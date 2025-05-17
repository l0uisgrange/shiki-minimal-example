<script lang="ts">
	import { Notice, version } from '$lib';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import { type Component, components } from '$lib/components';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Code from '$lib/components/Code.svelte';

	let results = $state(components.toSorted((a, b) => a.name.localeCompare(b.name)));

	let selectedComponent: Component | null = $state(null);
	let isDrawerOpen = $state(false);

	function openDrawer(component: Component, event: MouseEvent) {
		event.preventDefault();
		selectedComponent = component;
		isDrawerOpen = true;
	}

	function closeDrawer() {
		isDrawerOpen = false;
		setTimeout(() => {
			selectedComponent = null;
		}, 300);
	}
</script>

<svelte:head>
	<title>Components</title>
</svelte:head>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && isDrawerOpen) {
			e.preventDefault();
			closeDrawer();
		}
	}}
/>

<div class="items-stretch md:flex">
	<main class="min-h-dvh flex-auto p-5 pt-10 md:px-8 md:py-10">
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
		<div class="mt-9 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each results as component}
				<a
					href="/zap/docs/components/{component.name}"
					onclick={(e) => openDrawer(component, e)}
					class="dark:border-neutral-border group relative cursor-pointer overflow-hidden rounded-lg border border-neutral-200 text-current! decoration-0! hover:shadow-xs"
				>
					<img
						src={component.image}
						alt={component.name}
						class="h-40 w-full overflow-hidden object-cover transition group-hover:scale-103"
					/>
					<div
						class="absolute bottom-3 left-3 rounded-full bg-neutral-900/10 px-2 backdrop-blur-3xl"
					>
						{component.name}
					</div>
					{#if component.quick}
						<span
							class="absolute right-3 bottom-3 flex size-6 items-center justify-center rounded-full bg-neutral-900 text-white"
						>
							<span class="icon-[hugeicons--trapezoid-line-horizontal] size-4.5"
							></span>
						</span>
					{/if}
					{#if component.release === version}
						<span
							class="absolute top-2 left-3 my-0 rounded-full font-mono text-purple-500"
						>
							New
						</span>
					{/if}
				</a>
			{/each}
		</div>
	</main>
	<div class="relative hidden w-72 flex-none p-5 md:block"></div>
</div>

{#if isDrawerOpen && selectedComponent}
	<button
		aria-label="ded"
		class="fixed inset-0 z-40 bg-black/15 backdrop-blur-sm"
		onclick={closeDrawer}
		transition:fly={{ duration: 200, opacity: 0 }}
	></button>
	<div
		class="fixed right-0 bottom-0 left-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white p-6 shadow-lg dark:bg-neutral-900"
		transition:fly={{ y: 500, duration: 300, easing: quintOut }}
	>
		<h2 class="flex flex-wrap items-baseline gap-5 text-2xl font-bold capitalize">
			{selectedComponent.full_name}
			{#if selectedComponent.release === version}
				<span class="rounded-full font-mono text-lg text-purple-500">New</span>
			{/if}
			{#if selectedComponent.release}
				<p class="flex items-center gap-2 text-lg font-normal md:ml-auto">
					<span>Available since</span>
					<span class="font-mono text-base text-gray-500 lowercase">
						v{selectedComponent.release}
					</span>
				</p>
			{/if}
		</h2>
		<div class="grid items-start gap-7 md:grid-cols-2">
			<div>
				<h3>Example</h3>
				<Code
					content={`#import "@preview/zap:${version}"\n` +
						'\n' +
						'#zap.canvas({\n' +
						'    import zap: *\n' +
						'    \n' +
						`    ${selectedComponent.name}("i1", (0,0), (5,0))\n` +
						'})'}
				/>
			</div>
			<div>
				<h3>Options</h3>
				<img
					src={selectedComponent.image}
					alt={selectedComponent.name}
					class="w-44 rounded-lg border border-neutral-200 bg-white object-cover dark:border-neutral-700 dark:bg-neutral-800"
				/>
			</div>
		</div>
		<div
			class="absolute top-2 left-1/2 h-1 w-10 -translate-x-1/2 transform rounded-full bg-neutral-300 dark:bg-neutral-700"
		></div>
	</div>
{/if}
