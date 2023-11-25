import Login from '../../support/PageObject/Login'

describe('Add To Wishlist', () => {})
it('Add To Wishlist', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.visit(Login.visiturl)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(Login.uname)
    cy.get('#pass').type(Login.pass)
    cy.get('#send2').click()
    cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-11 > span').click()
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#option-label-size-143-item-167').click()
    cy.get('#option-label-color-93-item-49').click()
    cy.get('.product-addto-links > .towishlist').click()
    cy.get('.message-success')
    cy.contains('Olivia 1/4 Zip Light Jacket has been added to your Wish List. Click here to continue shopping.').should('exist')
})

