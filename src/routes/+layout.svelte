<script lang="ts">
	import '../app.css';
	import github from '$lib/github-mark.svg';

	let { children } = $props();
</script>

<div class="py-4">
	<div
		class="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 text-lg font-medium"
	>
		<a href="/circuitor">Circuitor</a>
		<a
			class="opacity-50 transition hover:opacity-75"
			href="https://github.com/l0uisgrange/circuitor"
		>
			<img src={github} alt="circuit" class="size-7" />
		</a>
	</div>
</div>
{@render children()}
