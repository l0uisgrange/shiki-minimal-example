<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import example1 from '$lib/examples/example1.svg';
</script>

<svelte:head>
	<title>Getting started</title>
</svelte:head>

<main class="block p-5 pt-10">
	<h1>Examples</h1>
	<p class="max-w-2xl text-lg">
		Explore the examples below to see Circuitor's advanced capabilities in action and discover
		just how easy it is to program complex circuit diagrams.
	</p>
	<div class="mt-14 grid gap-7 md:grid-cols-2">
		<div
			class="dark:border-neutral-border flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200"
		>
			<img src={example1} alt="example1" />
		</div>
		<Code
			content={'#circuitor.canvas({\n' +
				'    import circuitor: *\n' +
				'\n' +
				'    // Branch 1\n' +
				'    resistor("r1", (0,3), (3,3), label: $3 Omega$)\n' +
				'    vsource("v1", (0,0), (0,3), label: "V1")\n' +
				'    resistor("r2", (0,0), (0,-3), label: $4 Omega$)\n' +
				'\n' +
				'    // Branch 2\n' +
				'    led("l1", "r1.out", (rel: (0,-6)), label: "LED")\n' +
				'    inductor("i2", "r1.out", (rel: (3,0)), label: $6 mu"H"$)\n' +
				'    resistor("r3", "i2.out", (rel: (0,-6)), label: $2 Omega$)\n' +
				'\n' +
				'    // Wiring\n' +
				'    wire("r2.out", "r3.out")\n' +
				'})'}
		/>
	</div>
</main>
