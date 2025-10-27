// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

import awsAmplify from 'astro-aws-amplify';

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
  adapter: awsAmplify(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});


// cloudflare({
//   platformProxy: {
//     enabled: true,
//   },
// })
