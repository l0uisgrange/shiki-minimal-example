<script lang="ts">
	let { children, active = false, href } = $props();
</script>

<a
	{href}
	class="block {active &&
		'bg-neutral-100 dark:bg-neutral-800'} w-full max-w-none cursor-pointer rounded-md px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
>
	{@render children()}
</a>
