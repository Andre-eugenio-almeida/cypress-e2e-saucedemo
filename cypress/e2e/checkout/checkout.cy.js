describe('Checkout | Fluxo Completo de Compra', () => {

  beforeEach(() => {
    cy.login()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_item').should('exist')


  it('Deve realizar o checkout completo com sucesso', () => {
    // teste aqui
  })

})

  it('Deve realizar o checkout completo com sucesso', () => {

    // Adiciona produtos ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '2')

    // Acessa carrinho
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')

    // Valida itens no carrinho
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible')
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').should('be.visible')

    // Inicia checkout
    cy.get('[data-test="checkout"]').should('be.visible').click()

    // Preenche dados do comprador
    cy.get('[data-test="firstName"]').type('Andre')
    cy.get('[data-test="lastName"]').type('Almeida')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two')

    // Valida resumo da compra
    cy.contains('Payment Information').should('be.visible')
    cy.contains('Shipping Information').should('be.visible')
    cy.contains('Total').should('be.visible')

    // Finaliza compra
    cy.get('[data-test="finish"]').click()

    // Validação final
    cy.url().should('include', '/checkout-complete')
    cy.contains('Thank you for your order!').should('be.visible')
  })

})
