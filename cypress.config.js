const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: 'projetoTCC/automacoes/testeUI/cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'projetoTCC/automacoes/testeUI/cypress/support/e2e.js',
    fixturesFolder: 'projetoTCC/automacoes/testeUI/cypress/fixtures',
    screenshotsFolder: 'projetoTCC/automacoes/testeUI/cypress/screenshots'
  },
});
