const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: 'projetoTCC/automacoes/testeUI/cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'projetoTCC/automacoes/testeUI/cypress/support/e2e.js',
    fixturesFolder: 'projetoTCC/automacoes/testeUI/cypress/fixtures',
    screenshotsFolder: 'projetoTCC/automacoes/testeUI/cypress/screenshots'
  },
});
