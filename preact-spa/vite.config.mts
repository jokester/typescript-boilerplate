import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src',
  build: {
    outDir: path.join(__dirname, './build'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [preact()],
});
