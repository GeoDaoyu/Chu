export default {
  pluginSearchDirs: false,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'],
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
