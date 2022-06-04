module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    // react
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'eslintreact/require-default-props': 0,
    // next
    '@next/next/no-html-link-for-pages': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@**',
            group: 'internal',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  // overrides: [
  //   {
  //     // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
  //     env: {
  //       jest: true,
  //     },
  //     files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  //     extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
  //     rules: {
  //       'import/no-extraneous-dependencies': [
  //         'off',
  //         { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
  //       ],
  //     },
  //   },
  // ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
};
