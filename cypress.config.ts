import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/*.spec.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})
