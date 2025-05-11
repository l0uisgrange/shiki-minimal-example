<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import { Notice } from '$lib';
	import { onMount } from 'svelte';
	import NavButton from '$lib/components/NavButton.svelte';

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
	<title>Getting started</title>
</svelte:head>

<div class="md:flex md:items-stretch">
	<main class="min-h-dvh flex-auto p-5 pt-10 md:px-8 md:py-10">
		<h1>Getting started</h1>
		<p class="max-w-2xl text-lg">
			Circuitor is very easy to set up and works out of the box with the <a
				target="_blank"
				href="https://typst.app/universe">Typst Universe</a
			> registry.
		</p>
		<Notice type="danger" title="Upcoming Typst release">
			Circuitor will be released in Typst Universe on <span class="font-medium"
				>May 15th, 2025</span
			>.<br /> Until then, it is only available by cloning the
			<a target="_blank" href="https://github.com/l0uisgrange/circuitor">GitHub repository</a
			>.
		</Notice>
		<h2>Installation</h2>
		<p>
			Whether you're using the Typst online app or running Typst locally on your computer, you
			can start using Circuitor by adding the following line at the top of your Typst file.
		</p>
		<Code content={'#import "@preview/circuitor:0.1.0"'} />
		<h2>Report bugs</h2>
		<p>I actively maintain Circuitor and greatly value community feedback.</p>
		<p>
			If you encounter a bug, spot an incorrect symbol, or have an idea for a new feature or
			electrical component, feel free to <a
				target="_blank"
				href="https://github.com/l0uisgrange/circuitor/issues/new">open an issue</a
			>
			or a
			<a href="https://github.com/l0uisgrange/circuitor/discussions/new" target="_blank"
				>discussion</a
			> on the GitHub repository.
		</p>
		<h2>Create your first circuit</h2>
		<p>
			To get started with Circuitor, here's a minimal working example showing how to draw a
			simple circuit with just a few lines of code.
		</p>
		<Notice type="tip" title="Tip"
			>It is recommended to import circuitor component inside your canvas, as some circuitor
			functions override some basic Typst elements.</Notice
		>
		<Code
			content={'#import "@preview/circuitor:0.1.0"\n' +
				'\n' +
				'#circuitor.canvas({\n' +
				'    import circuitor: *\n' +
				'\n' +
				'    // Your amazing circuit\n' +
				'})'}
		/>
	</main>
	<div class="relative hidden flex-none p-5 md:block md:w-72">
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
