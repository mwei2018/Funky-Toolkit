import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    entry: {
      index: './src/index.ts',
    },
    alias: {
      '@': './src',
    },
  },
  output: {
    clean: true,
    distPath: {
      root: 'dist',
    },
    format: ['esm', 'cjs'],
    sourceMap: true,
    targets: ['es2018'],
    externals: [
      'react',
      'react-dom',
      'ag-grid-community',
      'ag-grid-enterprise',
      'ag-grid-react',
    ],
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-module',
    },
    compress: true,
  },
  plugins: [pluginReact()],
}); 