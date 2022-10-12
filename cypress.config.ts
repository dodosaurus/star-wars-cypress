const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  viewportWidth: 1080,
  viewportHeight: 1080,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'https://swapi.dev/api',
    supportFile:'cypress/support/tests.ts',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
})
