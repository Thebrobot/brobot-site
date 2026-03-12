import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thebrobot.com',
  trailingSlash: 'never',
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  vite: {
    envPrefix: ['VITE_', 'BROBOT_'],
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
