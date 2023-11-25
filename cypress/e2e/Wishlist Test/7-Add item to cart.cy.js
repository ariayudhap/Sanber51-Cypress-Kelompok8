import Login from '../../support/PageObject/Login'

describe('Add Item To Cart', () => {})
it('Add Item on the wishlist to the cart', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.visit(Login.visiturl)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(Login.uname)
    cy.get('#pass').type(Login.pass)
    cy.get('#send2').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click().click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .link > a').click()
    cy.get('.product-item-details > .product-item-actions > .actions-primary').click()
    cy.get('.message-success')
    cy.contains('You added Olivia 1/4 Zip Light Jacket to your shopping cart.').should('exist')

})







