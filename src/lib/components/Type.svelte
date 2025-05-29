<script lang="ts">
	// Define the type prop
	let { type } = $props();
	
	// Type to color mapping dictionary
	const typeColors = {
		'boolean': 'bg-green-100',
		'string': 'bg-red-100',
		'number': 'bg-purple-100',
		'coordinate': 'bg-yellow-100',
		'context': 'bg-blue-100',
		'dictionary': 'bg-pink-100',
		// Add more types as needed
	};
	
	// Get the color class based on the type, default to gray if type not found
	const colorClass = typeColors[type] || 'bg-gray-100';
</script>

<span class="mx-2 rounded-full {colorClass} px-2 py-0.5">{type}</span>