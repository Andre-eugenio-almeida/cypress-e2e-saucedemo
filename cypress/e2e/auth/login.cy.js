describe('Login - Sauce Demo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Deve realizar login com sucesso', () => {
    cy.get('[data-test="username"]')
      .should('be.visible')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .should('be.visible')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Não deve permitir login com senha inválida', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and( 'contain.text', 'Username and password do not match' )
  })

})
