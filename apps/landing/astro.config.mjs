// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: './dist',
  publicDir: './public',
  root: '.',
  build: {
    assets: 'assets',
    client: './dist',
    server: './dist/server',
    format: 'directory'
  },
  base: '/'
});
