import antfu from '@antfu/eslint-config';

export default antfu({
  vue: false,
  react: true,
  stylistic: {
    semi: true,
  },
  lessOpinionated: true,
  ignores: ['apps/*/public/assets'],
});
