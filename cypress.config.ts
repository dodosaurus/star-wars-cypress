const { defineConfig } = require("cypress");
import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  video: false,
  viewportWidth: 1080,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://swapi.dev/api",
    supportFile: "cypress/support/tests.ts",
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
  },
  env: {
    allureResultsPath: "allure/allure-results"
  }
});
