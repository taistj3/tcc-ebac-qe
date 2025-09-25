import { carrinhoSelectors } from "../selectors/carrinho"
class carrinhoPage {

    addProduto(produto, tamanho, cor, quantidade) {
        cy.get(carrinhoSelectors.produto).contains(produto).click()
        cy.get(carrinhoSelectors.tamanho(tamanho)).click()
        cy.get(carrinhoSelectors.cor(cor)).click()
        cy.get(carrinhoSelectors.quantidade).clear().type(quantidade)
        cy.get(carrinhoSelectors.btnAddCarrinho).click()
        // cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    }


}

export default new carrinhoPage()