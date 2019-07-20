// following https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/no-var-requires": 2,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-non-null-assertion": 1,
    "@typescript-eslint/no-use-before-define": 1,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-parameter-properties": 1,
    "@typescript-eslint/no-namespace": 1,
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
