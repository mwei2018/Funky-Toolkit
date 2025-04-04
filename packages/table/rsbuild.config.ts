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
      type: 'umd',
      name: 'FunkyTable',
    },
    clean: true,
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'ag-grid-community': 'ag-grid-community',
      'ag-grid-react': 'ag-grid-react'
    }
  },
}); 