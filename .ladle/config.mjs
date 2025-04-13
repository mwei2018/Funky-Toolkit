export default {
  stories: 'packages/*/src/**/*.stories.{js,jsx,ts,tsx}',
  port: 61000,
  defaultStory: 'basic-button-primary',
  addons: {
    a11y: {
      enabled: true
    },
    action: {
      enabled: true,
      defaultState: true
    },
    ladle: {
      enabled: true
    },
    source: {
      enabled: true,
      defaultState: true
    },
    theme: {
      enabled: true,
      defaultState: 'light'
    }
  }
}; 