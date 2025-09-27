/// <reference types="cypress" />
import detalhesContaPage from '../support/page_objects/detalhesConta.page'

describe('Funcionalidade Detalhes da conta', () => {
    let dadosLogin
    before(() => {
        cy.fixture('login').then(login => {
            dadosLogin = login
        })
    })
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Deve alterar dados pessoais com sucesso', () => {
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        detalhesContaPage.detalhesConta('Tais', 'Maria', 'Tais Maria', dadosLogin.valido.email)
        cy.get('[name="save_account_details"]').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
    it('Deve exibir mensagem de erro ao tentar atualizar senha sem fornecer a senha atual', () => {
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        cy.alterarSenha()
        cy.get('.woocommerce-error > li').should('contain', 'Digite sua senha atual.')
    })
})