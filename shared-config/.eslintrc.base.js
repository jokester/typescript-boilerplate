const tsRules = {
  '@typescript-eslint/ban-ts-comment': 1,
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/explicit-member-accessibility': 0,
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-empty-interface': 0,
  '@typescript-eslint/no-explicit-any': 1,
  '@typescript-eslint/no-namespace': 0,
  '@typescript-eslint/no-non-null-assertion': 1,
  '@typescript-eslint/no-parameter-properties': 0,
  '@typescript-eslint/no-unused-vars': 1,
  '@typescript-eslint/no-var-requires': 1,
};

const nodeRules = {
  'node/no-extraneous-import': 0,
  'node/no-extraneous-require': 0,
  'node/no-unpublished-require': 0,
};

const jsRules = {
  'no-constant-condition': 'warn',
  'no-control-regex': 'warn',
  'no-empty': 0,
  'no-inner-declarations': 'warn',
  'no-irregular-whitespace': 'warn',
  'no-unused-vars': 0,
  'no-useless-escape': 'warn',
};

const mergedRules = {
  ...jsRules,
  ...nodeRules,
  ...tsRules,
};
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },

  extends: [],
  plugins: [],
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.tsx', '**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      rules: mergedRules,
    },
  ],
  rules: mergedRules,
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
