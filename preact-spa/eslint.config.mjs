// @ts-ignore
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsMixin from './.eslint.ts-mixin.mjs';
import reactMixin from './.eslint.react.mjs';

export default tseslint.config(
  {
    ignores: ['build/'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // @ts-ignore
  ...tsMixin,
  ...reactMixin,
);
