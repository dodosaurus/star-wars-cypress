const { defineConfig } = require("cypress");
import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
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
    allureResultsPath: "allure/allure-results",
  },
});
