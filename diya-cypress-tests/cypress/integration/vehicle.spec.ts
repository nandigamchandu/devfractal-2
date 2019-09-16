describe('Navigate to vehicle page page', () => {
  const url = '/vehicles'
  context('Vehicles Module', () => {
    it('Navigate to Vehicles page home page', () => {
      cy.visit(url)
    })
    it('Check Vehicles title in Vehicles home page', () => {
      cy.contains('Vehicles')
    })
    it('Get validation for empty text field', () => {
      cy.getByText(/Add Vehicle/i).click()
      cy.get('input[name="makersClass"]').click()
      cy.get('input[name="vehicleClass"]').click()
      cy.getByText('this is a required field').should(
        'contain',
        'this is a required field',
      )
    })
    it('Back to Vehicles page for further testing', () => {
      cy.go('back')
    })
    it('Navigate to Add Vehicle page', () => {
      cy.getByText(/add Vehicle/i).click()
    })

    it('Check Create Vehicles title in Add Vehicles page', () => {
      cy.contains('Add Vehicle')
    })
    it('Add new vehicle and verify is ot added to table details or not', () => {
      cy.getByText(/Add Vehicle/i).click()
      cy.get('input[name="makersClass"]').type('ABCDE')
      cy.get('input[name="vehicleClass"]').type('Large')
      cy.get('input[name="yearOfManufacturing"]')
        .clear()
        .type('2001')
      cy.get('input[name="color"]').type('Green')
      cy.get('input[name="regnNumber"]').type('AP290')
      cy.get('input[name="warranty"]')
        .clear()
        .type('3')
      cy.get('input[name="lastServicedDate"]')
        .clear()
        .type('09/26/2019')
        .type('{enter}')
      cy.get('input[name="insuranceExpiryDate"]')
        .clear()
        .type('09/30/2019')
      cy.getByText(/submit/i).click()
    })
    it('Verifying the added vehicle in table', () => {
      cy.getAllByText(/^Next/i)
        .click()
        .click()
        .click()
        .click()
      cy.contains('ABCDE')
    })
    it('Back to Vehicles list page', () => {
      cy.go('back')
    })

    it('Reset functonality', () => {
      cy.getByText(/Add Vehicle/i).click()
      cy.get('input[name="makersClass"]').type('ABCDE')
      cy.get('input[name="vehicleClass"]').type('Large')
      cy.get('input[name="yearOfManufacturing"]')
        .clear()
        .type('2001')
      cy.get('input[name="color"]').type('Green')
      cy.getByText(/reset/i).click()
    })
    it('Back to Vehicle page', () => {
      cy.go('back')
    })
    it('Edit Page Navigation and check its title', () => {
      cy.getByText('Zur va cubobzub tocve.')
        .siblings()
        .last()
        .children()
        .children()
        .first()
        .click()
      cy.contains('Edit Vehicle')
    })
    it('Editing the required fields', () => {
      cy.get('input[name="makersClass"]')
        .clear()
        .type('iusjxfkm')
      cy.get('input[name="vehicleClass"]')
        .clear()
        .type('Medium')
      cy.get('input[name="yearOfManufacturing"]')
        .clear()
        .type('2002')
      cy.get('input[name="color"]')
        .clear()
        .type('Green')
      cy.get('input[name="regnNumber"]')
        .clear()
        .type('AP290')
      cy.get('input[name="warranty"]')
        .clear()
        .type('3')
      cy.getByText(/submit/i).click()
    })
    it('Back to client page', () => {
      cy.visit(url)
    })
    it('Validations for null data', () => {
      cy.getByText('Zur va cubobzub tocve.')
        .siblings()
        .last()
        .children()
        .children()
        .first()
        .click()
      cy.get('input[name="makersClass"]').clear()
      cy.get('input[name="vehicleClass"]').clear()
      cy.get('input[name="yearOfManufacturing"]').clear()
      cy.get('input[name="color"]').clear()
      cy.get('input[name="regnNumber"]').clear()
      cy.get('input[name="warranty"]').clear()
      cy.get('input[name="lastServicedDate"]').clear()
      cy.get('input[name="insuranceExpiryDate"]').clear()
      cy.getByText(/submit/i).click()
    })
    it('Back to Vehicle page', () => {
      cy.go('back')
    })
    it('Assign page navigation and check its title', () => {
      cy.getByText('Zur va cubobzub tocve.')
        .siblings()
        .last()
        .children()
        .first()
        .click()
      cy.contains('Assign')
    })
    it('Assign page submit button for null data', () => {
      cy.getByText(/submit/i).click()
    })
    it('Back to Vehicle page', () => {
      cy.go('back')
    })
    it('Assign page - submit button for valid data', () => {
      cy.getByText('Zur va cubobzub tocve.')
        .siblings()
        .last()
        .children()
        .first()
        .click()
      cy.get('input[name="client"]').type('Amazon')
      cy.get('input[name="batteryID"]').type('16512')
      cy.get('input[name="driver"]').type('Virat')
      cy.get('input[name="startDate"]')
        .clear()
        .type('09/26/2019')
        .type('{enter}')
      cy.get('input[name="endDate"]')
        .clear()
        .type('09/30/2019')
        .type('{enter}')
      cy.get('select[name="contractType"]').select('Weekly')
      cy.getByText(/submit/i).click()
    })
    it('Assign page - Reset functionality', () => {
      cy.getByText('Zur va cubobzub tocve.')
        .siblings()
        .last()
        .children()
        .first()
        .click()
      cy.get('input[name="client"]').type('Amazon')
      cy.get('input[name="batteryID"]').type('16512')
      cy.get('input[name="driver"]').type('Virat')
      cy.getByText(/reset/i).click()
    })
    it('Back to Vehicle page', () => {
      cy.go('back')
    })
    it('Navigate to battery page', () => {
      cy.getByText(/^battery/i).click()
    })
  })
})
