import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks(id) {
          // Keep colors out of the main entry so lazy pages don't import App/theme.
          if (id.includes('/src/theme/colors')) {
            return 'theme-shared';
          }
          if (!id.includes('node_modules')) return;

          // React + MUI must share a chunk. Splitting them creates a circular
          // import (mui ↔ react-vendor) that crashes at runtime with
          // "Cannot access 'Ii' before initialization".
          if (
            id.includes('@mui') ||
            id.includes('@emotion') ||
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor';
          }

          if (id.includes('framer-motion')) return 'motion';

          if (id.includes('@firebase/')) {
            const pkg = id.match(/@firebase\/([^/]+)/)?.[1];
            if (pkg) return `firebase-${pkg}`;
          }
          const firebaseEntry = id.match(/node_modules\/firebase\/([^/]+)/)?.[1];
          if (
            firebaseEntry &&
            firebaseEntry !== 'node_modules' &&
            firebaseEntry !== 'firebase'
          ) {
            return `firebase-${firebaseEntry}`;
          }
          if (id.includes('firebase')) return 'firebase';
        },
      },
    },
  },
})
