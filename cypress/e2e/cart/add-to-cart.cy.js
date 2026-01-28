describe('Carrinho de Compras - Sauce Demo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
  })

  it('Deve adicionar múltiplos produtos ao carrinho e validar', () => {
    // Adiciona dois produtos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    
    // Valida contador do carrinho
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '2')
    
    // Acessa carrinho
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    
    // Valida produtos no carrinho
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')
  })

  it('Deve remover produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.cart_item').should('not.exist')
    cy.get('.shopping_cart_badge').should('not.exist')
  })

})
