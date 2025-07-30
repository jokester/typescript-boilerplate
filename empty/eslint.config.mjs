import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import mixin from './.eslint.ts-mixin.mjs';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...mixin,
);
