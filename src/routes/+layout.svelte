<script lang="ts">
	import '../app.css';
	import github from '$lib/github-mark.svg';
	import githublight from '$lib/github-light.svg';

	let { children } = $props();
</script>

<div class="dark:gray-dark dark:border-neutral-border border-b border-neutral-200 py-3">
	<div class="mx-auto flex items-center justify-between px-5 py-2.5 text-lg font-medium">
		<a href="/circuitor">Circuitor</a>
		<a
			class="opacity-50 transition hover:opacity-75"
			href="https://github.com/l0uisgrange/circuitor"
		>
			<img src={github} alt="circuit" class="size-7 dark:hidden" />
			<img src={githublight} alt="circuit" class="hidden size-7 dark:block" />
		</a>
	</div>
</div>
<div class="max-w-screen">
	{@render children()}
</div>
