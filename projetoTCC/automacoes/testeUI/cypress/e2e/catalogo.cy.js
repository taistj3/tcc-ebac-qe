/// <reference types="cypress" />

describe('Funcionalidade catálogo de produtos', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Deve buscar produto por nome', () => {
        cy.buscarProduto('Ingrid Running Jacket');
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket');
    })
    it('Deve filtrar produtos por categoria', () => {
        cy.contains('a.btn-view-all', 'view all').click();
        cy.get('.search > .tbay-search-form .form-ajax-search .select-category span').click();
        cy.get('.search > .tbay-search-form .form-ajax-search .select-category .options').click();
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .optWrapper > .options > :nth-child(3)').click(); 
        cy.get('.woof_remove_ppi').should('contain', 'men');
    })
})