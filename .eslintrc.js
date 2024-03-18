/*
File name     : .eslintrc.js
Description   : ESLint configuration file. Used for linting the code.
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-10-02
Revisions  :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Exports are Used for linting the code.
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_', // ignore unused variables whose name starts with '_'
        argsIgnorePattern: '^_', // ignore unused function arguments whose name starts with '_'
        ignoreRestSiblings: true, // ignore the rest variables in a destructuring pattern
      },
    ],
  },
}
