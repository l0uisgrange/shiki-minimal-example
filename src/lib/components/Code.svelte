<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { onMount } from 'svelte';

	let { content, language = 'typst' } = $props();

	let code: string = $state('');

	onMount(async () => {
		const highlighter = await createHighlighter({
			themes: ['github-dark'],
			langs: ['typst']
		});
		code = highlighter.codeToHtml(content.toString(), {
			theme: 'github-dark',
			lang: language
		});
	});
</script>

<div class="overflow-hidden rounded-xl bg-neutral-950 p-1 text-base">
	<div class="rounded-lg bg-[#24292e] px-4 py-3 ring-1 ring-white/15 ring-inset">
		{@html code}
	</div>
</div>
