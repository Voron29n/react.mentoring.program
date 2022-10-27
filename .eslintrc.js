module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-node', 'prettier', 'react'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 0
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },

  globals: {
    global: false,
    Promise: false
  },

  settings: {
    'import/core-modules': ['@expo/vector-icons'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
