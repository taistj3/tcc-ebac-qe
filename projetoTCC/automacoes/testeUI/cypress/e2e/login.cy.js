/// <reference types="cypress" />
import { loginSelectors } from '../support/selectors/login'

describe('Funcionalidade Login', () => {
  let dadosLogin

  before(() => {
    cy.fixture('login').then(login => {
      dadosLogin = login
    })
  })

  beforeEach(() => {
    cy.visit('minha-conta')
  })

  it('Deve fazer login com sucesso', () => {
    cy.login(dadosLogin.valido.email, dadosLogin.valido.senha)
    cy.get(loginSelectors.pageTitle).should('contain', 'Minha conta')
  })
  it('Deve exibir uma mensagem de erro ao inserir senha incorreta', () => {
    cy.login(dadosLogin.invalido.email, dadosLogin.invalido.senha)
    cy.get(loginSelectors.msgErro).should('contain', 'Erro: A senha fornecida para o e-mail taisebac@teste.com está incorreta')
  })
})