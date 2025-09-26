import { loginSelectors } from '../support/selectors/login'
import { catalogoSelectors } from '../support/selectors/catalogo'

Cypress.Commands.add('login', (email, senha) => {
    cy.get(loginSelectors.username).type(email)
    cy.get(loginSelectors.password).type(senha, { log: false }) //neste caso o log é falso para não aparecer a senha no relatório do cypress
    cy.get(loginSelectors.btnLogin).click()
})

Cypress.Commands.add('buscarProduto', (nome) => {
    cy.contains('a.btn-view-all', 'view all').click();
    cy.get(catalogoSelectors.buscar, { timeout: 5000 }).click().type(nome);
    cy.get(catalogoSelectors.btnBuscar).click();
});

Cypress.Commands.add('filtrarCategoria', (opcao) => {
    cy.contains('a.btn-view-all', 'view all').click();
    cy.get(catalogoSelectors.categoria).should('be.visible').click();
    cy.get(catalogoSelectors.escolher(opcao)).should('be.visible').click();
    cy.get(catalogoSelectors.btnBuscar).should('be.visible').click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })