import type { Config } from 'ladle';

const config: Config = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@ladle/addon-essentials'],
  framework: {
    name: '@ladle/react',
    options: {},
  },
  docsMode: true,
};

export default config; 