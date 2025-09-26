/// <reference types="cypress" />

import enderecosPage from "../support/page_objects/enderecos.page"

describe('Funcionalidade Minha Conta', () => {
    let dadosLogin
    before(() => {
        cy.fixture('login').then(login => {
            dadosLogin = login
        })
    })
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Deve cadastrar endereço com sucesso', () => {
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        enderecosPage.cadastro('João', 'Silva', 'Brasil', 'Rua das Flores, 123', 'São Paulo', 'São Paulo', '12345-678', '11999999999', 'taisebac@teste.com')
        cy.get('[name="save_address"]').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })
    it('Deve exibir mensagem de erro ao cadastrar endereço sem preencher todos os campos obrigatórios', () => {
        cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
        enderecosPage.cadastro('joao', 'Silva', 'Brasil', 'Rua das Flores, 123', 'São Paulo', 'São Paulo', '12345-678', '11999999999', 'taisebac@teste.com')
        cy.get('[name="billing_first_name"]').clear()
        cy.get('[name="save_address"]').click()
        cy.get('.woocommerce-error > li').should('contain', 'é um campo obrigatório.')
    })
})