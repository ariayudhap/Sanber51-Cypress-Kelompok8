describe('Choose Product', () => {
    it('Success Choose Product Women Tops', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.contains('Sign In').click()
      cy.url().should('include','customer/account/login/referer')
      cy.get('#email').type('leni@gmail.com')
      cy.get('[title="Password"]').type('Leni1234')
      cy.wait(2000); 
      cy.get('[class="action login primary"]').click()
      cy.url().should('include','magento.softwaretestingboard.com')
      cy.wait(2000); 
      cy.get('#ui-id-3 > span').click()
      cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click()
      cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.wait(3000); 
      cy.get('#option-label-size-143-item-169').click()
      cy.get('#option-label-color-93-item-53').click()
      cy.get('#product-addtocart-button').click()
      cy.wait(2000); 
    })
  
    it('Success Choose Product Men Bottom', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.contains('Sign In').click()
      cy.url().should('include','customer/account/login/referer')
      cy.get('#email').type('leni@gmail.com')
      cy.get('[title="Password"]').type('Leni1234')
      cy.wait(2000); 
      cy.get('[class="action login primary"]').click()
      cy.url().should('include','magento.softwaretestingboard.com')
      cy.wait(2000); 
      cy.get('#ui-id-3 > span').click()
      cy.get(':nth-child(4) > :nth-child(5) > a').click()
      cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.wait(3000); 
      cy.get('[id="option-label-size-143-item-176"]').click()
      cy.get('[id="option-label-color-93-item-53"]').click()
      cy.get('#product-addtocart-button').click()
      cy.wait(2000); 
    })
  
    it('Failed Choose Product Women Tops Because dont choose color & size', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.contains('Sign In').click()
      cy.url().should('include','customer/account/login/referer')
      cy.get('#email').type('leni@gmail.com')
      cy.get('[title="Password"]').type('Leni1234')
      cy.wait(2000); 
      cy.get('[class="action login primary"]').click()
      cy.url().should('include','magento.softwaretestingboard.com')
      cy.wait(2000); 
      cy.get('#ui-id-3 > span').click()
      cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click()
      cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').click()
      cy.wait(2000); 
      cy.get('[id="super_attribute[143]-error"]').should('contain','This is a required field.')
      cy.get('[id="super_attribute[93]-error"]').should('contain','This is a required field.')
      cy.wait(2000); 
    })
  
    it('Failed Choose Product Men Bottom Because dont choose color & size', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.contains('Sign In').click()
      cy.url().should('include','customer/account/login/referer')
      cy.get('#email').type('leni@gmail.com')
      cy.get('[title="Password"]').type('Leni1234')
      cy.wait(2000); 
      cy.get('[class="action login primary"]').click()
      cy.url().should('include','magento.softwaretestingboard.com')
      cy.wait(2000); 
      cy.get('#ui-id-3 > span').click()
      cy.get(':nth-child(4) > :nth-child(5) > a').click()
      cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').click()
      cy.wait(2000); 
      cy.get('[id="super_attribute[143]-error"]').should('contain','This is a required field.')
      cy.get('[id="super_attribute[93]-error"]').should('contain','This is a required field.')
      cy.wait(2000); 
    })
  })
  