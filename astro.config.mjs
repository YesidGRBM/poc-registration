// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  integrations: [svelte()],
  adapter: cloudflare()
});