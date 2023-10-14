/// <reference types="@types/node" />
import { defineConfig } from 'tsup';
import path from 'node:path';

export default defineConfig({
  entry: ['src/index.tsx'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: process.env.NODE_ENV === 'production',
  inject: ['src/_util/react-import.ts'], // to not import React in each file
  env: {
    NODE_ENV: process.env.NODE_ENV ?? 'development',
  },
  outDir: path.join(__dirname, 'public/dist'),
});
