import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    library: {
      name: 'FunkyUI',
      type: 'umd',
    },
    clean: true,
  },
}); 