<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto flex items-start px-5">
	<div class="font-medium">deded</div>
	<article class="flex-auto py-10">
		{@render children()}
	</article>
	<div></div>
</div>
