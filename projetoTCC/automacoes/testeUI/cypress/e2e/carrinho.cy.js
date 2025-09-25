/// <reference types="cypress" />
import { carrinhoSelectors } from '../support/selectors/carrinho'
import carrinhoPage from '../support/page_objects/carrinho.page'

describe('Funcionalidade carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve permitir adicionar 10 produtos iguais ao carrinho', () => {
    carrinhoPage.addProduto('Augusta Pullover Jacket', 'M', 'Blue', '10')
    cy.get(carrinhoSelectors.resultado).should('contain', '10')
  })
  it('Deve exibir mensagem de erro ao inserir 11 produtos iguais ao carrinho', () => {
    carrinhoPage.addProduto('Augusta Pullover Jacket', 'M', 'Orange', '11')
    cy.get(carrinhoSelectors.resultado).should('contain', 'Limite de 10 itens por vez')
  })
})