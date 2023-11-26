import Login from '../../support/PageObject/Login'

describe('View Wishlist Page With Item', () => {})
it('View Wishlist Page With Item', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.visit(Login.visiturl)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(Login.uname)
    cy.get('#pass').type(Login.pass)
    cy.get('#send2').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click().click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .link > a').click()
    cy.get('.actions-secondary > .btn-remove').click()
    cy.get('.message-success')
    cy.contains("Olivia 1/4 Zip Light Jacket has been removed from your Wish List.").should('exist')
})

