import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: '../circetz/docs/',
			assets: '../circetz/docs/',
			fallback: 'index.html',
			precompress: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/circuitor'
		}
	}
};

export default config;
