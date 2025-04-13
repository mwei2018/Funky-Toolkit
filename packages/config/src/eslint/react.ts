import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};

export default config; 