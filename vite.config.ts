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
          if (id.includes('/src/theme/colors') || id.includes('/src/theme/gradients')) {
            return 'theme-shared';
          }
          if (!id.includes('node_modules')) return;
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) {
            return 'react-vendor';
          }
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
