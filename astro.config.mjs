// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages at https://crs48.github.io/courtyard-block-site
export default defineConfig({
  site: 'https://crs48.github.io',
  base: '/courtyard-block-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
