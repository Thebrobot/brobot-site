import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { visualizer } from 'rollup-plugin-visualizer';

const analyze = process.env.ANALYZE === '1';

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
    plugins: analyze
      ? [
          visualizer({
            filename: 'dist/bundle-stats.html',
            gzipSize: true,
            brotliSize: true,
            template: 'treemap',
            open: false,
          }),
        ]
      : [],
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
