import { includeIgnoreFile } from '@eslint/compat';
import xoReactSpace from 'eslint-config-xo-react/space';
import xoSpaceBrowser from 'eslint-config-xo/space/browser';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  ...xoSpaceBrowser,
  ...xoReactSpace,
]);
