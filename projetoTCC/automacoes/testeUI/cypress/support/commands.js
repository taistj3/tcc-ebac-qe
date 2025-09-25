import { loginSelectors } from '../support/selectors/login'

Cypress.Commands.add('login', (email, senha) => {
    cy.get(loginSelectors.username).type(email)
    cy.get(loginSelectors.password).type(senha, { log: false }) //neste caso o log é falso para não aparecer a senha no relatório do cypress
    cy.get(loginSelectors.btnLogin).click()

})

Cypress.Commands.add('buscarProduto', (nome) => {
    cy.contains('a.btn-view-all', 'view all').click();
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .CaptionCont > span', { timeout: 5000 }).click().type(nome);
    cy.get('.search > .tbay-search-form .form-ajax-search .button-group')
        .should('be.visible')
        .click();
});

Cypress.Commands.add('filtrarCategoria', (opcaoTexto) => {
    cy.contains('a.btn-view-all', 'view all').click();
    cy.get('.search > .tbay-search-form .form-ajax-search .select-category span')
        .should('be.visible')
        .click();
    cy.get('.search > .tbay-search-form .form-ajax-search .select-category .options')
        .should('be.visible')
        .contains(opcaoTexto)
        .click();
    cy.get('.search > .tbay-search-form .form-ajax-search .button-group')
        .should('be.visible')
        .click();
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