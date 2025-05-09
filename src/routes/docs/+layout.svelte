<script lang="ts">
	import NavButton from '$lib/components/NavButton.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<div class="relative flex max-w-screen overflow-hidden">
	<div
		class="dark:border-neutral-border sticky top-32 left-0 hidden min-h-full w-72 flex-none space-y-1 border-r border-neutral-200 p-5 font-medium md:block"
	>
		<NavButton href="/circuitor/docs" active={page.url.pathname === '/circuitor/docs'}
			>Get started</NavButton
		>
		<NavButton
			href="/circuitor/docs/components"
			active={page.url.pathname.startsWith('/circuitor/docs/components')}
			>Components</NavButton
		>
	</div>
	<article class="flex-auto">
		{@render children()}
	</article>
</div>
