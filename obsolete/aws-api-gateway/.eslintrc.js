module.exports =  {
  parser:  '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  extends:  [
    // "eslint:recommended", // not enabling: it reports many TS idioms as error
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking", // cant find for unknonw reason
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": 2,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-non-null-assertion": 1,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
