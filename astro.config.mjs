// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [svelte()],
  adapter: node({
    mode: 'standalone'
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  server: {
    host: true
  }
});
