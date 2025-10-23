import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  outDir: 'dist',
  format: 'cjs',
  target: 'node20.18',
  bundle: true,
  minify: true,
  external: [],
  publicDir: 'public',
  banner: {
    js: '#!/usr/bin/env node',
  },
  clean: true,
});
