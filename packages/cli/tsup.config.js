import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  outDir: 'dist',
  format: 'esm',
  target: 'node20.18',
  bundle: true,
  minify: true,
  external: ['@inquirer/prompts', 'chalk', 'commander'],
  banner: {
    js: '#!/usr/bin/env node',
  },
  clean: true,
});
