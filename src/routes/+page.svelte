<script lang="ts">
	import circuit from '$lib/main.svg';
</script>

<div
	class="flex min-h-screen w-screen flex-col items-center justify-center bg-neutral-900 py-20 text-center text-white"
>
	<span class="max-w-3xl text-4xl font-bold font-stretch-expanded md:text-7xl">
		Draw electronic circuits like a champion
	</span>
	<div class="mt-8 flex items-center gap-3">
		<a
			href="/circuitor/docs"
			class="rounded-full bg-white px-5 py-2 font-medium text-neutral-900 transition hover:bg-white/80"
		>
			Documentation
		</a>
		<a
			href="/circuitor/examples"
			class="rounded-full bg-black/50 px-5 py-2.5 font-medium text-white transition hover:bg-black/70"
		>
			Examples
		</a>
	</div>
	<div>
		<img src={circuit} alt="circuit" />
	</div>
	<p>This website is still a Work In Progress</p>
</div>
