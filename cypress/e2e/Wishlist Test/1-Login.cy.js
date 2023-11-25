import Login from '../../support/PageObject/Login'

describe('Login', () => {})
    it('Success To Login', () => {
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit(Login.visiturl)
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get('#email').type(Login.uname)
      cy.get('#pass').type(Login.pass)
      cy.get('#send2').click()
  })

