import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Libraries change rarely: keep them in their own long-cached files so a
        // content edit only re-downloads the small app chunk
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/[\/](react|react-dom|scheduler|react-router|react-router-dom)[\/]/.test(id)) return 'react';
          if (/[\/](framer-motion|motion-dom|motion-utils)[\/]/.test(id)) return 'motion';
        },
      },
    },
  },
});
