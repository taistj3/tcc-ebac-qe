/// <reference types="cypress" />

describe('Funcionalidade catálogo de produtos', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve buscar produto por nome', () => {
        cy.buscarProduto('Ingrid Running Jacket');
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket');
    })
    it('Deve filtrar produtos por categoria', () => {
        cy.filtrarCategoria('5')
        cy.get('.page-title').should('contain', 'Resultados da pesquisa por');
    })
})