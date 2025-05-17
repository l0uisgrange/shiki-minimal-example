<script lang="ts">
	import circuit from '$lib/main.svg';
	import { onMount } from 'svelte';
	import Animated from './Animated.svelte';
	import { version } from '$lib';

	let codes = [
		{
			code:
				`#import "@preview/zap:${version}"\n` +
				'\n' +
				'#zap.canvas({\n' +
				'    import zap: *\n' +
				'    \n' +
				'    isource("i1", (0,0), (5,0))\n' +
				'})'
		},
		{
			code:
				`#import "@preview/zap:${version}"\n` +
				'\n' +
				'#zap.canvas({\n' +
				'    import zap: *\n' +
				'    \n' +
				'    isource("i1", (0,0), (5,0))\n' +
				'    vsource("v1", (0,0))\n' +
				'})'
		}
	];

	let code = $state(codes[0].code);
	let image = $state(codes[0].image);
	let counter = $state(0);

	onMount(() => {
		let interval = setInterval(() => {
			console.log(counter);
			if (counter === codes.length - 1) {
				counter = 0;
			} else {
				counter++;
			}
			code = codes[counter].code;
		}, 2000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Zap – Your Typst Circuit Drawing Companion</title>
</svelte:head>

<div class="flex w-screen flex-col px-5 py-14 md:min-h-screen md:py-20">
	<span class="text-new font-mono">Brand New Package</span>
	<span
		class="mt-2 max-w-7xl text-4xl font-medium tracking-tight text-balance font-stretch-expanded md:text-8xl"
	>
		Your Typst circuit drawing companion
	</span>
	<div class="mt-8 flex items-center gap-3">
		<a
			href="/zap/docs"
			class="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-white transition hover:bg-neutral-900/90 dark:bg-white dark:text-black"
		>
			<span class="icon-[hugeicons--book-open-02] size-5.5"></span> Documentation
		</a>
		<a
			href="/zap/examples"
			class="rounded-full bg-gray-500 px-5 py-2 text-white transition hover:bg-gray-500/90 dark:bg-gray-600 dark:hover:bg-gray-600/90"
		>
			Examples
		</a>
	</div>
	<div class="mt-20 grid max-w-7xl items-start gap-8 text-left md:grid-cols-2">
		<Animated {code} />
		<div class="dark:border-neutral-border rounded-lg border border-neutral-200">
			<img src={image} alt="circuit" />
		</div>
	</div>
</div>
