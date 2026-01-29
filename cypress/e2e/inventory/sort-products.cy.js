describe('Inventory - Lista de Produtos', () => {

  beforeEach(() => {
    cy.login() // 🔑 login centralizado
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })

  it('Deve exibir a lista de produtos', () => {
    cy.get('.inventory_item').should('be.visible')
  })

  it('Deve ordenar produtos do A ao Z', () => {
  cy.get('.product_sort_container').should('be.visible')
    .select('az')
  })

  it('Deve ordenar produtos do A ao Z', () => {
  cy.get('.product_sort_container').should('be.visible')
    .select('az')
  })

  it('Deve ordenar produtos do A ao Z', () => {
  cy.get('.product_sort_container').should('be.visible')
    .select('az')
  })

})

