// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages at https://crs48.github.io/courtyardblock
export default defineConfig({
  site: 'https://crs48.github.io',
  base: '/courtyardblock',
  vite: {
    plugins: [tailwindcss()],
  },
});
