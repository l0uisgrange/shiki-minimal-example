<script lang="ts">
	import '../app.css';
	import github from '$lib/github-mark.svg';
	import typst from '$lib/typst.svg';
	import typstlight from '$lib/typst-light.svg';
	import githublight from '$lib/github-light.svg';

	let { children } = $props();
</script>

<div
	class="dark:gray-dark dark:border-neutral-border sticky top-0 left-0 z-10 border-b border-neutral-200 bg-white py-3 dark:bg-neutral-900"
>
	<div class="mx-auto flex items-center justify-between gap-5 px-5 py-2.5">
		<a href="/circuitor" class="text-lg font-medium">Circuitor</a>
		<span class="font-mono text-neutral-500 antialiased">v0.1.0</span>
		<a href="/circuitor/docs" class="ml-auto">Documentation</a>
		<a href="/circuitor/examples">Examples</a>
		<a
			class="mt-1.5 ml-5 opacity-50 transition hover:opacity-75"
			href="https://typst.app/universe/package/circuitor"
		>
			<img src={typst} alt="typst" class="h-5 dark:hidden" />
			<img src={typstlight} alt="typst" class="hidden h-5 dark:block" />
		</a>
		<a
			class="opacity-50 transition hover:opacity-75"
			href="https://github.com/l0uisgrange/circuitor"
		>
			<img src={github} alt="github" class="size-7 dark:hidden" />
			<img src={githublight} alt="github" class="hidden size-7 dark:block" />
		</a>
	</div>
</div>
<div class="max-w-screen">
	{@render children()}
</div>
