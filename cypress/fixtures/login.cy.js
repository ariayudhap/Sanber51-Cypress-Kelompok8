describe('login', () => {
  it('positive - sukses login', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel>.header>.authorization-link').click()
    cy.get('#email').type('wildahafiz@mail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Hafiz11!')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2)> .greet > .logged-in').should('have.text','Welcome,Wilda testing Wilda!')
    
  })
  it('Negativ - Failed password', () => { 
  cy.visit ('https://magento.softwaretestingboard.com/')
  cy.get('.panel>.header>.authorization-link').click()
  cy.get('.login-container > .block-customer-login> .block content> .#login-form> .fieldset> .password> .control> #passs').type('rizikdafni')
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  cy.get('.massage-error> div').should('have.text','Infalid From Key.Please Refresh The Page')
  })
})