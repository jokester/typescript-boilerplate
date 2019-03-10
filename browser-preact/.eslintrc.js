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
    "@typescript-eslint/no-var-requires": false,
    "@typescript-eslint/no-unused-vars": false,
    "@typescript-eslint/explicit-member-accessibility": false,
    "@typescript-eslint/no-non-null-assertion": false,
    "@typescript-eslint/no-use-before-define": false,
    "@typescript-eslint/no-empty-interface": false,
    "@typescript-eslint/no-parameter-properties": false,
    "@typescript-eslint/no-namespace": false,
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
