<script lang="ts">
	import '../app.css';
	import github from '$lib/github-mark.svg';
	import circuit from '$lib/main.svg';

	let { children } = $props();
</script>

<div class="py-4">
	<div
		class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-lg font-medium"
	>
		Circuitor
		<img src={github} alt="circuit" class="size-7 opacity-50" />
	</div>
</div>
{@render children()}
<div></div>
