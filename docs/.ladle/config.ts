import type { Config } from 'ladle';

const config: Config = {
  stories: [
    '../packages/*/src/stories/**/*.stories.tsx'
  ],
  addons: ['@ladle/addon-essentials'],
  framework: {
    name: '@ladle/react',
    options: {},
  },
  docsMode: true,
  sidebar: {
    groups: [
      {
        name: 'Funky UI 组件',
        stories: ['../packages/ui/src/stories/**/*.stories.tsx']
      },
      {
        name: 'Funky 表格组件',
        stories: ['../packages/table/src/stories/**/*.stories.tsx']
      },
      {
        name: 'Funky 图标组件',
        stories: ['../packages/icons/src/stories/**/*.stories.tsx']
      }
    ]
  }
};

export default config; 