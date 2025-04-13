import { defineConfig, type RsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export const sharedConfig: RsbuildConfig = {
  source: {
    alias: {
      '@': './src',
    },
  },
  output: {
    distPath: {
      root: 'dist',
    },
    sourceMap: true,
  },
  performance: {
    buildCache: true,
    printFileSize: true,
    chunkSplit: {
      strategy: 'split-by-module' as const,
    },
  },
  tools: {
    bundlerChain: (chain) => {
      chain.optimization.minimize(true);      
      chain.optimization.splitChunks({
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
      });
    },
  },
  html: {
    meta: {
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
};

/**
 * 默认导出的配置
 * 可以被各个包的配置继承和覆盖
 */
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