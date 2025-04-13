import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': ['error', { 
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      caughtErrors: 'none'
    }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: true
  }
};

export default config; 