describe('Checkout completo - Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve realizar checkout completo com sucesso', () => {
    // Adiciona produtos ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    // Acessa carrinho
    cy.get('.shopping_cart_link').click()

    // Valida itens no carrinho
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')

    // Inicia checkout
    cy.get('[data-test="checkout"]').click()

    // Preenche dados
    cy.get('[data-test="firstName"]').type('Andre')
    cy.get('[data-test="lastName"]').type('Almeida')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    // Valida resumo
    cy.contains('Payment Information').should('be.visible')
    cy.contains('Shipping Information').should('be.visible')
    cy.contains('Total').should('be.visible')

    // Finaliza compra
    cy.get('[data-test="finish"]').click()

    // Validação final
    cy.contains('Thank you for your order!').should('be.visible')
    cy.contains('Your order has been dispatched').should('be.visible')
  })
})
