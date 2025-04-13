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
  },
  output: {
    ...sharedConfig.output,
    externals: ['react', 'react-dom'],
  },
  plugins: [pluginReact()],
}); 