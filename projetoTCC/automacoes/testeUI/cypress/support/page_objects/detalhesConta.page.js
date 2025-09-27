class detalhesContaPage {

    detalhesConta(nome, sobrenome, nomeExibicao, email){ 
        cy.get('[name="account_first_name"]').clear().type(nome)
        cy.get('[name="account_last_name"]').clear().type(sobrenome)
        cy.get('[name="account_display_name"]').clear().type(nomeExibicao)
        cy.get('[name="account_email"]').clear().type(email)
    }
}
export default new detalhesContaPage()