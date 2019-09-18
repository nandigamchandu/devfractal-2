context('navigation to Drivers page', () => {
  const url = '/drivers'
  it('Navigate to Drivers page', () => {
    cy.visit(url)
    cy.url().should('include', 'drivers')
  })
  it('check whether the menu burger is diaplying or not', () => {
    cy.get('#burger').click()
  })
  it('verify the functionality of menu burger', () => {
    cy.get('ul')
      .queryAllByText('Vehicles')
      .should('be.empty')
  })
  it('check whether the menu burger functionality', () => {
    cy.get('#burger')
      .click()
      .get('ul')
      .queryAllByText('Vehicles')
      .should('be.empty')
  })
  it('Check the logo', () => {
    cy.get('img').each($el => {
      cy.wrap($el).should('have.attr', 'alt')
    })
  })
})
