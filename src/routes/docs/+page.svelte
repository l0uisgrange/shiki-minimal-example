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

<div class="flex items-start">
	<main>
		<h1>Get started</h1>
		<p class="max-w-2xl text-lg">
			Circuitor is easy to set up and works out of the box with <a
				target="_blank"
				href="https://typst.app/universe">Typst Universe</a
			>. There are two main ways to start using the library, depending on your workflow.
		</p>
		<h2>Typst Universe</h2>
		<p>
			If you’re working in the online Typst app, you can import Circuitor directly with a
			single line.
		</p>
		<Notice type="info" title="Information">
			Circuitor will be released in Typst Universe around <span class="font-medium"
				>May 15th, 2025</span
			>
		</Notice>
		<Code content={'#import "@preview/circuitor:0.1.0"'} />
		<h2 class="mt-3">Local package</h2>
		<p>
			If you prefer to work offline or want to explore the source code, you can also use
			Circuitor by downloading it locally from the GitHub repository.
		</p>
		<ul class="ms-7 list-outside list-decimal">
			<li>Clone or download the repository to your computer.</li>
			<li>In your Typst project, import the exports.typ file located in the src folder:</li>
		</ul>
		<Code content={'#import "PATH_TO_CIRCUITOR/src/exports.typ"'} />
		<p>
			Make sure the path reflects the actual location of the downloaded folder relative to
			your .typ file.
		</p>
	</main>
	<div class="relative h-full w-72 flex-none p-5">
		<ul class="sticky top-20">
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
