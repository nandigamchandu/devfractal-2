describe('Navigate to clients page', () => {
  const url = '/clients'
  context('Clients Module', () => {
    it('Navigate to clients page home page', () => {
      cy.visit(url)
    })

    it('Check clients title in clients home page', () => {
      cy.contains('Clients')
    })

    it('Get validation for empty text field', () => {
      cy.getByText(/add client/i).click()
      cy.get('input[name="clientName"]').click()
      cy.get('input[name="email"]').click()
      cy.getByText('this is a required field').should(
        'contain',
        'this is a required field',
      )
    })

    it('Back to clients page for further testing', () => {
      cy.go('back')
    })
    it('Check whether its navigating to clients list page or not', () => {
      cy.url().should('include', 'clients')
    })

    it('Navigate to Add clent page and check its navigating or not', () => {
      cy.getByText(/add client/i).click()
      cy.url().should('include', 'clients/new')
    })

    it('Check Create client title in Add client page', () => {
      cy.contains('Add Client')
    })

    it('Add client - Create client Page - Submit button for valid data', () => {
      cy.get('input[name="clientName"]').type('Amazon')
      cy.get('select[name="contractType"]').select('Monthly')
      cy.get('input[name="email"]').type('anusha@g.com')
      cy.get('input[name="numberOfEVS"]')
        .clear()
        .type('3')
      cy.get('input[name="rateOfEVS"]')
        .clear()
        .type('430')
      cy.get('input[name="assignedEVSHistory"]')
        .clear()
        .type('45')
      cy.getAllByText(/submit/i).click()
    })
    it('Verify whether user navigating to clients list page or not while submitting the form', () => {
      cy.url().should('include', 'clients')
    })
    it('Validating added client- check whether the added client is reflecting or not in table', () => {
      cy.getByText(/next/i)
        .click()
        .click()
        .click()
        .click()
      cy.contains('Amazon')
    })
    it('Add client - Create client Page - Reset Functionality', () => {
      cy.getByText(/add client/i).click()
      cy.get('input[name="clientName"]').type('Amazon')
      cy.get('select[name="contractType"]').select('Monthly')
      cy.get('input[name="email"]').type('anusha@g.com')
      cy.get('input[name="numberOfEVS"]')
        .clear()
        .type('3')
      cy.get('input[name="rateOfEVS"]')
        .clear()
        .type('430')
      cy.get('input[name="assignedEVSHistory"]')
        .clear()
        .type('45')
      cy.getAllByText(/reset/i).click()
    })

    it('Back to client page', () => {
      cy.visit(url)
    })

    it('Edit driver page navigation', () => {
      cy.getByText(/next/i)
        .click()
        .click()
        .click()
        .click()
      cy.contains('Amazon')
      cy.getByText('Amazon')
        .siblings()
        .last()
        .children()
        .children()
        .first()
        .click()
    })

    it('Check Edit client title in Edit client page', () => {
      cy.contains('Edit client')
    })
    it('Check whether its navigating to Edit client page or not', () => {
      cy.url().should('include', 'edit')
    })
    it('Edit client page', () => {
      cy.get('input[name="numberOfEVS"]')
        .clear()
        .type('4')
      cy.get('select[name="contractType"]').select('Monthly')
      cy.get('input[name="rateOfEVS"]')
        .clear()
        .type('431')
      cy.get('input[name="assignedEVSHistory"]')
        .clear()
        .type('46')
      cy.get('input[name="email"]')
        .clear()
        .type('anusha@g.com')
      cy.getAllByText(/submit/i).click()
    })
    it('Verify whether user navigating to clients list page or not while submitting the form', () => {
      cy.url().should('include', 'clients')
    })

    it('Edit client page navigation and validations for null data', () => {
      cy.getByText(/next/i)
        .click()
        .click()
        .click()
        .click()
      cy.getByText('Amazon')
        .siblings()
        .last()
        .children()
        .children()
        .first()
        .click()
      cy.get('input[name="clientName"]').clear()
      cy.get('select[name="contractType"]').select('Weekly')
      cy.get('input[name="email"]').clear()
      cy.get('input[name="numberOfEVS"]').clear()
      cy.get('input[name="rateOfEVS"]').clear()
      cy.get('input[name="assignedEVSHistory"]').clear()
      cy.getAllByText(/submit/i).click()
    })
    it('Back to clients home page', () => {
      cy.visit(url)
    })

    it('Navigate to Users table', () => {
      cy.getByText(/^users/i).click()
    })
  })
})
