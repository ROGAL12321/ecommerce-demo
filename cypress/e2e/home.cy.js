describe('HomePage', () => {
  it('should display basic elements', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('input[type*="checkbox"]').click()

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Ecommerce Demo')
  })
})
