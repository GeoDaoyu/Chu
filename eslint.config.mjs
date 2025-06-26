import { react } from 'eslint-config-ali';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  ...react,
  prettier,
  {
    ignores: [
      'apps/*/public/assets',
      'apps/*/src/.umi',
      'apps/*/src/.umi-production',
      'packages/*/.dumi',
      'apps/*/dist',
      'packages/*/dist',
      'packages/*/bin',
    ],
  },
  {
    rules: {
      'react/prop-types': 'off',
    },
  },
];
