/// <reference types="cypress" />

describe('Funcionalidade Meus pedidos', () => {
    let dadosLogin
    before(() => {
        cy.fixture('login').then(login => {
            dadosLogin = login
        })
    })
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Deve exibir página com meus pedidos', () => {
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click()
        cy.get('.page-title').should('contain', 'Pedidos')
    })
    it('Deve exibir detalhes do pedido ao clicar em Visualizar', () => {
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        cy.detalhesPedido(2)
        cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')
    })
})