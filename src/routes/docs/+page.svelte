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
			Circuitor is easy to set up and works out of the box with <a
				target="_blank"
				href="https://typst.app/universe">Typst Universe</a
			>. There are two main ways to start using the library, depending on your workflow.
		</p>
		<Notice type="danger" title="Upcoming Typst release">
			Circuitor will be released in Typst Universe on <span class="font-medium"
				>May 15th, 2025</span
			>.<br /> Until then, it is only available by cloning the
			<a target="_blank" href="https://github.com/l0uisgrange/circuitor">GitHub repository</a
			>.
		</Notice>
		<h2>Typst Universe</h2>
		<p>
			If you're working in the online Typst app, you can import Circuitor directly with a
			single line.
		</p>
		<Code content={'#import "@preview/circuitor:0.1.0"'} />
		<h2 class="mt-3">Local package</h2>
		<p class="mb-4!">
			If you prefer to work offline or want to explore the source code, you can also use
			Circuitor by downloading it locally from Typst Universe registry.
		</p>
		<a
			target="_blank"
			href="https://packages.typst.org/preview/circuitor-0.1.0.tar.gz"
			class="dark:border-neutral-border flex max-w-max items-center gap-2 rounded-full border border-neutral-200 px-5 py-2! font-medium text-current! decoration-0 transition hover:border-black dark:hover:border-white"
		>
			<span class="icon-[hugeicons--download-02] size-5.5"></span>
			Download
		</a>
		<ul class="ms-7 mt-4 list-outside list-decimal">
			<li>Download the package to your computer.</li>
			<li>Uncompress it</li>
			<li>
				In your Typst project, import the <span class="font-mono">lib.typ</span> file located
				in the src folder:
			</li>
		</ul>
		<Code content={'#import "PATH_TO_CIRCUITOR/src/lib.typ"'} />
		<p>
			Make sure the path reflects the actual location of the downloaded folder relative to
			your .typ file.
		</p>
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
		<h2>Minimal starting point</h2>
		<p>
			To get started with Circuitor, here’s a minimal working example showing how to draw a
			simple circuit with just a few lines of code.
		</p>
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
