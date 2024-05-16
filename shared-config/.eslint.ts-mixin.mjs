import importX from "eslint-plugin-import-x"

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
  '@typescript-eslint/require-await': 1,
  '@typescript-eslint/no-unsafe-member-access': 1,
  "@typescript-eslint/no-unsafe-assignment": 1,
  "@typescript-eslint/no-unsafe-argument": 1,
  "@typescript-eslint/no-unsafe-return": 1,
  "@typescript-eslint/no-unsafe-call": 1,
};

const eslintConfig = {
  plugins: {
    importX,
  },
  rules: {
    ...tsRules
  },
};

export default [eslintConfig];
