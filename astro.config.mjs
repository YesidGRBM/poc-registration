// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      URL_SERVER: envField.string({context: 'server', access: 'public', default: 'https://poc-registration-services-production.up.railway.app' })
    }
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    ssr: {
      external: ['node:crypto']
    }
  },

  integrations: [svelte()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  })
});