<script lang="ts">
	import { onMount } from 'svelte';
	import NavButton from '$lib/components/NavButton.svelte';
	import Code from '$lib/components/Code.svelte';
	import { version } from '$lib';

	let headings: any[] = $state([]);

	onMount(() => {
		const headingElements = document.querySelectorAll('h1, h2, h3');
		headings = Array.from(headingElements).map((element, index) => {
			const uid = `heading-${index}`;
			element.id = uid;
			return {
				level: parseInt(element.tagName.substring(1)),
				text: element.textContent || '',
				uid
			};
		});
	});
</script>

<svelte:head>
	<title>Basics</title>
</svelte:head>

<div class="items-stretch md:flex">
	<main class="min-h-dvh p-5 pt-10 md:px-8 md:py-10">
		<h1>Custom components</h1>
		<p class="max-w-2xl text-lg">
			For circuits demanding specialized components, Zap delivers the intuitive tools you need to easily manufacture your own.
		</p>
		<h2>Base template</h2>
		<p>
			Let's create a new component, called <span class="text-component font-mono">square</span>. Start by copying the code below into your own
			Typst project. You can already see you can use the quick <span class="text-component font-mono">component</span> and
			<span class="text-component font-mono">interface</span> utilities of Zap, which automatically handle wiring and positioning for you.
		</p>
		<div class="grid">
			<Code
				content={`#import "@preview/zap:${version}": component, interface, draw as d\n` +
					'\n' +
					'#let square(name, node, ..params) = {\n' +
					'    // New component style\n' +
					'    let style = (\n' +
					'        // Component styling here\n' +
					'    )' +
					'    \n' +
					'    \n' +
					'    // Drawing function\n' +
					'    let draw(ctx, position, style) = {\n' +
					'        interface((-style.width / 2, -style.height / 2), (style.width / 2, style.height / 2), io: position.len() < 2)\n' +
					'        \n' +
					'        // Draw the component here\n' +
					'    }\n' +
					'   \n' +
					'    // Componant call\n' +
					'    component("square", name, node, draw: draw, style: style, ..params)\n' +
					'}'}
			/>
		</div>

		<h2>Draw component</h2>
		<p>Once</p>
		<div class="mb-2 flex flex-wrap items-center justify-center gap-1 px-4 py-4 font-mono text-sm *:rounded-full *:px-3 *:py-1 *:font-light">
			<div class="bg-component/10 text-component">component</div>
			(
			<div class="bg-string/10 text-string">"name"</div>
			,
			<div class="bg-float/10">
				(<span class="text-float">0</span>,<span class="text-float">0</span>)
			</div>
			,
			<div class="bg-float/10">
				(<span class="text-float">0</span>,<span class="text-float">0</span>)
			</div>
			,
			<div class="bg-params/10">
				<span class="text-params">..params</span>
			</div>
			)
		</div>
		<p>
			You choose the type of <span class="text-component font-mono">component</span> you need from the
			<a href="/zap/docs/components">full list</a>. Giving your component a
			<span class="text-string font-mono">name</span> is important as it lets you easily find and use this component later when you're building more
			of your circuit, and it helps you connect to its 'anchors' (connection points). We'll explain more about anchors next.
		</p>
		<p>
			The <span class="text-params font-mono">params</span> are settings that let you change how your component looks or what it does. For
			example, you can add a label like
			<span class="inline-flex flex-nowrap">
				<span class="text-params mr-1.5 font-mono">label:</span>
				<span class="text-string font-mono">$R_1$</span>
			</span> to make things clearer or to show specific details, like the value of a resistor.
		</p>
	</main>
	<div class="relative hidden w-72 flex-none p-5 md:block">
		<ul class="sticky top-32 block">
			{#each headings as heading}
				<li style="margin-left: {heading.level * 10}px;">
					<NavButton href={`#${heading.uid}`}>
						{heading.text}
					</NavButton>
				</li>
			{/each}
		</ul>
	</div>
</div>
