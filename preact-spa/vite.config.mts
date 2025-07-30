import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
// import react from '@vitejs/plugin-react'
import path from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src',
  base: './',
  build: {
    outDir: path.join(__dirname, './build'),
    emptyOutDir: true,
    target: 'esnext',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [preact(), visualizer()],
});
