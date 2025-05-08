<script module lang="ts">
	function getTypeClasses(type: string): string {
		switch (type) {
			case 'info':
				return 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300';
			case 'warning':
				return 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950 dark:border-yellow-900 dark:text-yellow-300';
			case 'danger':
				return 'bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-900 dark:text-red-300';
			case 'tip':
				return 'bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-900 dark:text-green-300';
			case 'note':
				return 'bg-gray-50 border-gray-200 text-gray-800 dark:bg-gray-950 dark:border-gray-900 dark:text-gray-300';
			default:
				return 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300';
		}
	}
</script>

<script lang="ts">
	type NoticeType = 'info' | 'warning' | 'danger' | 'tip' | 'note';

	let {
		children,
		type = 'info',
		title = undefined
	} = $props<{ type?: NoticeType; title?: string }>();
</script>

<div class={`mb-4 rounded-md border p-4 ${getTypeClasses(type)}`}>
	<div class="flex">
		<div class="mr-3 flex-shrink-0">
			{#if type === 'info'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-blue-500 dark:text-blue-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else if type === 'warning'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-yellow-500 dark:text-yellow-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else if type === 'danger'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-red-500 dark:text-red-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else if type === 'tip'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-green-500 dark:text-green-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
					/>
				</svg>
			{:else if type === 'note'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-gray-500 dark:text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
						clip-rule="evenodd"
					/>
				</svg>
			{/if}
		</div>
		<div>
			{#if title}
				<div class="mb-2 font-medium">{title}</div>
			{/if}
			<div>
				{@render children()}
			</div>
		</div>
	</div>
</div>
