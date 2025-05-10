<script lang="ts">
	import { createHighlighter, type Highlighter } from 'shiki';
	import { onMount } from 'svelte';

	let { content, language = 'typst' } = $props();

	let highlighter: Highlighter | undefined = $state(undefined);
	let isDarkMode = $state(false);

	onMount(async () => {
		const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isDarkMode = darkModeQuery.matches;
		darkModeQuery.addEventListener('change', (event) => {
			isDarkMode = event.matches;
		});
		highlighter = await createHighlighter({
			themes: ['github-light-default', 'github-dark-default'],
			langs: ['typst']
		});
	});

	const code = $derived.by(() => {
		if (!highlighter) return '';
		return highlighter.codeToHtml(content.toString(), {
			theme: isDarkMode ? 'github-dark-default' : 'github-light-default',
			lang: language
		});
	});
</script>

<div
	class="mb-2 block w-full max-w-full overflow-x-auto bg-neutral-100 px-4 py-3 antialiased dark:bg-neutral-800"
>
	{@html code}
</div>
