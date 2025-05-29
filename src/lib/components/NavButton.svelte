<script lang="ts">
	let { children, active = false, href, newFeature = false } = $props();
</script>

<a
	{href}
	class="block {active &&
		'bg-neutral-100 dark:bg-neutral-800'} flex w-full max-w-none cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
>
	{@render children()}
	{#if newFeature}
		<span class="font-mono text-purple-600">New</span>
	{/if}
</a>
