class minhaContaPage {

    acessarPainel() {
        cy.visit('minha-conta')
    }
    paginaInicial() {
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    }


}
export default new minhaContaPage()