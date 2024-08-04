import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import ('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter()
  },
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/D4r3d3vil.github.io' : '',
  }
};

export default config;
