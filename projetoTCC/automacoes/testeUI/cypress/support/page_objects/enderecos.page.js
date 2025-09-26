class enderecosPage {


    cadastro(nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click();
        cy.get(':nth-child(1) > .title > .edit').click();
        cy.get('[name="billing_first_name"]').clear().type(nome);
        cy.get('[name="billing_last_name"]').clear().type(sobrenome);
        
        cy.get('#select2-billing_country-container').click(); // abre o dropdown
        cy.get('.select2-search__field').type(pais);
        cy.get('.select2-results__option').contains(pais).click();
        
        cy.get('[name="billing_address_1"]').clear().type(endereco);
        cy.get('[name="billing_city"]').clear().type(cidade);
        
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type(estado);
        cy.get('.select2-results__option').contains(estado).click();
        
        cy.get('[name="billing_postcode"]').clear().type(cep);
        cy.get('[name="billing_phone"]').clear().type(telefone);
        cy.get('[name="billing_email"]').clear().type(email);
    }


}

export default new enderecosPage()