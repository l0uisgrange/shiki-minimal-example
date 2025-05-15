<script lang="ts">
	import Code from '$lib/components/Code.svelte';

	let { typst, latex } = $props();

	let selection = $state('typst');
</script>

<div
	class="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-3 *:cursor-pointer *:rounded-full *:bg-neutral-200/30 *:px-3 *:py-1 *:text-gray-600 *:has-open:text-red-500 dark:border-neutral-800"
>
	<button
		onclick={() => (selection = 'typst')}
		class={selection === 'typst' && 'bg-neutral-200/70!'}>Zap</button
	>
	<button
		onclick={() => (selection = 'latex')}
		class={selection === 'latex' && 'bg-neutral-200/70!'}>Circuitikz</button
	>
</div>

{#if selection === 'typst'}
	<Code content={typst} />
{:else}
	<Code content={latex} language="latex" />
{/if}
