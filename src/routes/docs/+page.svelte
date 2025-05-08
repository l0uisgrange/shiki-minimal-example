<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import { Notice } from '$lib';
</script>

<h1>Get started</h1>
<p>
	Circuitor is easy to set up and works out of the box 📦 with Typst Universe. There are two main
	ways to start using the library, depending on your workflow.
</p>
<h2>Typst Universe</h2>
<p>
	If you’re working in the online Typst app, you can import Circuitor directly with a single line.
</p>
<p class="text-red-600">Circuitor will be released in Typst Universe around May 15th, 2025</p>
<Code content={'#import "@preview/circuitor:0.1.0"'} />
<h2 class="mt-3">Local package</h2>
<p>
	If you prefer to work offline or want to explore the source code, you can also use Circuitor by
	downloading it locally from the GitHub repository.
</p>
<ul class="ms-7 list-outside list-decimal">
	<li>Clone or download the repository to your computer.</li>
	<li>In your Typst project, import the exports.typ file located in the src folder:</li>
</ul>
<Code content={'#import "PATH_TO_CIRCUITOR/src/exports.typ"'} />

<!--<h2 class="mt-5">Notice Component Examples</h2>
<p>Here are examples of the Notice component with different variants:</p>

<Notice type="info" title="Information">
	This is an informational notice that provides general information to the user.
</Notice>

<Notice type="warning" title="Warning">
	This is a warning notice that alerts the user about potential issues.
</Notice>

<Notice type="danger" title="Danger">
	This is a danger notice that warns the user about critical issues that require immediate attention.
</Notice>

<Notice type="tip" title="Tip">
	This is a tip notice that provides helpful suggestions to the user.
</Notice>

<Notice type="note" title="Note">
	This is a note notice that provides additional context or details.
</Notice>

<h3 class="mt-3">Usage</h3>
<Code content={`<Notice type="info" title="Optional Title">
  Your notice content goes here.
</Notice>`} />-->
