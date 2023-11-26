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
    cy.contains('My Wish List').should('exist')
    cy.contains('1 Item').should('exist')
})

