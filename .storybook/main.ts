import type { StorybookConfig } from '@storybook/types';

const config: StorybookConfig = {
  stories: [
    '../packages/*/src/**/*.mdx',
    '../packages/*/src/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },

  docs: {}
};

export default config; 