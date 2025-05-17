<script lang="ts">
	import { createHighlighter, type Highlighter } from 'shiki';
	import { onMount } from 'svelte';

	let { content, language = 'typst', dark = false } = $props();

	let highlighter: Highlighter | undefined = $state(undefined);
	let isDarkMode = $state(false);

	onMount(async () => {
		const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isDarkMode = darkModeQuery.matches;
		darkModeQuery.addEventListener('change', (event) => {
			isDarkMode = event.matches;
		});
		highlighter = await createHighlighter({
			themes: dark
				? ['github-dark-default']
				: ['github-light-default', 'github-dark-default'],
			langs: ['typst', 'latex']
		});
	});

	const code = $derived.by(() => {
		if (!highlighter) return '';
		return highlighter.codeToHtml(content.toString(), {
			theme: isDarkMode || dark ? 'github-dark-default' : 'github-light-default',
			lang: language
		});
	});
</script>

<div
	class="mb-2 block w-full max-w-full overflow-x-auto rounded-xl bg-neutral-100 px-4 py-3 antialiased ring-1 ring-gray-200 ring-offset-2 ring-offset-neutral-100 ring-inset dark:bg-neutral-800 dark:ring-gray-800 dark:ring-offset-neutral-800"
>
	{@html code}
</div>
