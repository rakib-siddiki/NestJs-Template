module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended', // Recommended ESLint rules
    'plugin:node/recommended', // Node.js-specific linting (optional)
    'plugin:import/errors', // Import statement rules
    'plugin:import/warnings',
    'plugin:import/typescript', // Typescript support for import rules
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    es2021: true, // Adds support for ES2021 features
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Additional rules for code quality
    'prettier/prettier': 'error', // Ensure that Prettier formatting rules are followed
    '@typescript-eslint/no-unused-vars': ['warn'], // Warns for unused variables
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'explicit' },
    ], // Enforces explicit member accessibility (e.g., public, private)
    'no-console': 'warn', // Warn on console statements (you can change this to 'error' if needed)
    'no-var': 'error', // Enforce the use of let or const, not var
    'prefer-const': 'warn', // Suggest using const when variables are not reassigned
    eqeqeq: ['error', 'always'], // Enforce the use of strict equality (=== instead of ==)

    // TypeScript specific rules
    '@typescript-eslint/ban-ts-comment': 'warn', // Warns when using `@ts-ignore` or similar comments
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Best practices
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'error', // Ensure imports resolve properly
  },
};
