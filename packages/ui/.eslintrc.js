module.exports = {
  extends: [
    '@funky/config/dist/eslint/base',
    '@funky/config/dist/eslint/typescript',
    '@funky/config/dist/eslint/react'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
}; 