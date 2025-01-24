// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Optimize Tailwind by enabling JIT mode
      applyBaseStyles: false,
    }),
    svelte()
  ],
  vite: {
    build: {
      // Enable minification for production
      minify: 'terser',
      // Optimize CSS
      cssMinify: true
    },
    ssr: {
      // Optimize SSR
      noExternal: ['@astrojs/tailwind']
    }
  }
});