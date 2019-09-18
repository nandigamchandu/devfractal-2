describe('Navigate to Geofence page', () => {
  const url = '/geo_fences'
  context('GeoFence Module', () => {
    it('Navigate to Geofences page home page', () => {
      cy.visit(url)
      cy.url().should('include', 'geo_fences')
    })

    it('Check clients title in clients home page', () => {
      cy.contains('GeoFence')
    })

    it('Get validation for empty text field', () => {
      cy.getByText(/Create GeoFence/i).click()
      cy.get('input[name="areaName"]').click()
      cy.get('input[name="assignVehicle"]').click()
      cy.getByText('this is a required field').should(
        'contain',
        'this is a required field',
      )
    })

    it('Back to Geofences page for further testing', () => {
      cy.go('back')
    })

    it('Check whether its navigating to geofences list page or not', () => {
      cy.url().should('include', 'geo_fences')
    })

    it('Navigate to Add Geofence page and check its navigating or not', () => {
      cy.getByText(/Create GeoFence/i).click()
      cy.url().should('include', 'geo_fences/new')
    })

    it('Check Create GeoFence title in Add GeoFence page', () => {
      cy.contains('Add GeoFence')
    })

    it('Add  GeoFence - Create GeoFence Page - Submit button for valid data', () => {
      cy.get('input[name="areaName"]').type('Kukatpally')
      cy.get('input[name="assignVehicle"]').type('Ap902')
      cy.get('input[name="assignClient"]').type('Kukatpally')
      cy.get('textarea[name="comments"]').type('there are different things')
      cy.getAllByText(/submit/i).click()
    })

    it('Verify whether user navigating to geofences list page or not while submitting the form', () => {
      cy.url().should('include', 'geo_fences')
    })

    it('Validating added GeoFence- check whether the added GeoFence is reflecting or not in table and verifyining forward pagination', () => {
      cy.getByText(/next/i)
        .click()
        .click()
        .click()
        .click()
      cy.contains('Ap902')
    })

    it('Back to GeoFence page and verification of backford pagination', () => {
      cy.getByText(/Previous/i)
        .click()
        .click()
        .click()
        .click()
    })

    it('Add GeoFence - Create GeoFence Page - Reset Functionality', () => {
      cy.getByText(/Create GeoFence/i).click()
      cy.get('input[name="areaName"]').type('Kukatpally')
      cy.get('input[name="assignVehicle"]').type('Ap902')
      cy.get('input[name="assignClient"]').type('Kukatpally')
      cy.get('textarea[name="comments"]').type('there are different things')
      cy.getAllByText(/reset/i).click()
    })

    it('Back to GeoFence page', () => {
      cy.go('back')
    })

    it('Edit GeoFence page navigation', () => {
      cy.getByText(/next/i)
        .click()
        .click()
        .click()
        .click()
      cy.contains('Ap902')
      cy.getByText('Ap902')
        .siblings()
        .last()
        .children()
        .children()
        .first()
        .click()
    })

    it('Check whether its navigating to Edit GeoFence page or not', () => {
      cy.url().should('include', 'edit')
    })

    it('Check Edit GeoFence title in Edit GeoFence page', () => {
      cy.contains('Edit GeoFence')
    })

    it('Edit GeoFence page', () => {
      cy.get('input[name="areaName"]')
        .clear()
        .type('Kukatpally')
      cy.get('input[name="assignClient"]')
        .clear()
        .type('Amazon')
      cy.getAllByText(/submit/i).click()
    })

    it('Verify whether user navigating to geofences list page or not while submitting the form', () => {
      cy.url().should('include', 'geo_fences')
    })

    it('Edit client page navigation and validations for null data', () => {
      cy.getByText(/next/i)
        .click()
        .click()
        .click()
        .click()
      cy.getByText('Ap902')
        .siblings()
        .last()
        .children()
        .children()
        .first()
        .click()
      cy.get('input[name="areaName"]').clear()
      cy.get('input[name="assignVehicle"]').clear()
      cy.get('input[name="assignClient"]').clear()
      cy.get('textarea[name="comments"]').clear()
      cy.getAllByText(/submit/i).click()
    })
    it('Back to GeoFences home page', () => {
      cy.visit(url)
    })

    it('Navigate to Users table', () => {
      cy.getByText(/^invoices/i).click()
    })
  })
})
