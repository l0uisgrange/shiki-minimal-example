<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { onMount } from 'svelte';

	let { content, language = 'typst' } = $props();

	let code: string = $state('');
	let isDarkMode = $state(false);

	onMount(async () => {
		const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isDarkMode = darkModeQuery.matches;
		darkModeQuery.addEventListener('change', (event) => {
			isDarkMode = event.matches;
		});
		const highlighter = await createHighlighter({
			themes: ['github-light-default', 'github-dark-default'],
			langs: ['typst']
		});
		code = highlighter.codeToHtml(content.toString(), {
			theme: isDarkMode ? 'github-dark-default' : 'github-light-default',
			lang: language
		});
	});
</script>

<div class="mb-2 overflow-x-scroll bg-neutral-100 px-4 py-3 dark:bg-neutral-800">
	{@html code}
</div>
