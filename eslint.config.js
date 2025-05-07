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
  {
    rules: {
      '@stylistic/object-curly-spacing': ['error', 'always'], // 强制 对象字面量（{}）内部必须包含空格
      '@stylistic/jsx-quotes': ['error', 'prefer-double'], // 强制 JSX 属性使用双引号
    },
  },
]);
