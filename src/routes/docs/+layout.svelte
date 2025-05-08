<script lang="ts">
	import NavButton from '$lib/components/NavButton.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<div class="flex max-w-screen items-start overflow-hidden">
	<div
		class="dark:border-neutral-border min-h-screen w-72 flex-none space-y-1 border-r border-neutral-200 p-5 font-medium"
	>
		<NavButton href="/circuitor/docs" active={page.url.pathname === '/circuitor/docs'}
			>Get started</NavButton
		>
		<NavButton href="/circuitor/" active={page.url.pathname === '/circuitor/docs'}
			>Get started</NavButton
		>
		<NavButton href="/circuitor" active={page.url.pathname === '/circuitor/docs'}
			>Get started</NavButton
		>
	</div>
	<article class="px-8 py-10">
		{@render children()}
	</article>
	<div></div>
</div>
