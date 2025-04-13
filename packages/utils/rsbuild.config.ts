import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { sharedConfig } from '../../rsbuild.shared';

export default defineConfig({
  ...sharedConfig,
  source: {
    ...sharedConfig.source,
    entry: {
      index: './src/index.ts',
    },
    alias: {
      '@': './src',
    },
  },
  output: {
    ...sharedConfig.output,
    clean: true,
    distPath: {
      root: 'dist',
    },
    format: ['esm', 'cjs'],
    sourceMap: true,
    targets: ['es2018'],
    externals: ['react', 'react-dom'],
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-module',
    },
    compress: true,
  },
  plugins: [pluginReact()],
}); 