/// <reference types="cypress" />

import minhaContaPage from "../support/page_objects/minhaConta.page"

describe('Funcionalidade Minha Conta', () => {
    let dadosLogin
    before(() => {
        cy.fixture('login').then(login => {
            dadosLogin = login
        })
    })
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve acessar painel Minha Conta com sucesso ao logar na plataforma', () => {
        minhaContaPage.acessarPainel();
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        minhaContaPage.paginaInicial();
        cy.acessarMinhaConta();
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    })
    it('Não permitir acessar o painel Minha Conta sem logar', () => {
        cy.acessarMinhaConta();
        cy.get(':nth-child(1) > h2').should('contain', 'Login', 'Register')
    })
})