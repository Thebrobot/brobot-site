import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thebrobot.com',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    envPrefix: ['VITE_', 'BROBOT_'],
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
