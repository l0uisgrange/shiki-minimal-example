<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto grid max-w-7xl grid-cols-4 px-5">
	<div class="font-medium">deded</div>
	<article class="col-span-2">
		{@render children()}
	</article>
	<div></div>
</div>
