import type { Linter } from 'eslint';
import { eslintConfig } from './packages/config/src/eslint';

const config: Linter.Config = {
  root: true,
  extends: ['./packages/config/src/eslint'],
};

export default config; 