import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: staticAdapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/inclusivegvl' : ''
		}
	}
};

export default config;
