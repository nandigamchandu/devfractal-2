/// <reference types="Cypress" />

context('navigation to Drivers page', () => {
  const url = '/drivers'
  it('Navigate to Drivers page', () => {
    cy.visit(url)
    cy.url().should('include', 'drivers')
  })

  it('Check Drivers title in Drivers home page', () => {
    cy.contains('Drivers')
  })

  it('Get validation for empty text field', () => {
    cy.getByText(/add driver/i).click()
    cy.get('input[name="name"]').click()
    cy.get('input[name="phone"]').click()
    cy.getByText('this is a required field').should(
      'contain',
      'this is a required field',
    )
  })

  it('Back to Drivers page for further testing', () => {
    cy.go('back')
  })
  it('Check whether its navigating to drivers list page or not', () => {
    cy.url().should('include', 'drivers')
  })

  it('Navigate to Add driver page and check its navigating or not', () => {
    cy.getByText(/add driver/i).click()
    cy.url().should('include', 'drivers/new')
  })

  it('Check Create Driver title in Add Driver page', () => {
    cy.contains('Create Driver')
  })

  it('Add Driver - Create driver Page - Submit button for valid data', () => {
    cy.get('input[name="name"]').type('ashika')
    cy.get('input[name="phone"]').type('9287382749')
    cy.get('input[name="driverLicence"]').type('7632hgashd')
    cy.get('input[name="adharNumber"]').type('923887239323')
    cy.get('select[name="shift"]').select('evening')
    cy.get('input[name="address1"]').type('Mpp Colony')
    cy.get('input[name="address2"]').type('Hyderabad')
    cy.get('input[name="accountName"]').type('Anusha')
    cy.get('input[name="accountNumber"]').type('567898473')
    cy.get('input[name="confirmAccountNumber"]').type('567898473')
    cy.get('input[name="bankName"]').type('ICICI')
    cy.get('input[name="bankBranch"]').type('HayathNagar')
    cy.get('input[name="branchIFSCNumber"]').type('ICIC2003')
    cy.get('input[name="verified"]').check('pending')
    cy.get('input[name="emergencyContactPerson"]').type('Amrutha')
    cy.get('input[name="emergencyContactNumber"]').type('984867582')
    cy.get('select[name="relation"]').select('father')
    cy.getAllByText(/submit/i).click()
  })
  it('Verify whether user navigating to drivers list page or not while submitting the form', () => {
    cy.url().should('include', 'drivers')
  })
  it('Validating added driver- check whether the added driver is reflecting or not in table', () => {
    cy.getByText(/next/i)
      .click()
      .click()
      .click()
      .click()
    cy.contains('ashika')
  })
  it('Add Driver - Create driver Page - Reset Functionality', () => {
    cy.getByText(/add driver/i).click()
    cy.get('input[name="name"]').type('anusha')
    cy.get('input[name="phone"]').type('9287382749')
    cy.get('input[name="driverLicence"]').type('7632hgashd')
    cy.get('input[name="adharNumber"]').type('923887239323')
    cy.get('select[name="shift"]').select('morning')
    cy.get('input[name="address1"]').type('Mpp Colony')
    cy.get('input[name="address2"]').type('Hyderabad')
    cy.getAllByText(/reset/i).click()
  })

  it('Back to Drivers page', () => {
    cy.visit(url)
  })

  it('Edit driver page navigation', () => {
    cy.getByText(/next/i)
      .click()
      .click()
      .click()
      .click()
    cy.getByText('ashika')
      .siblings()
      .last()
      .children()
      .children()
      .first()
      .click()
  })
  it('Check whether its navigating to Edit driver page or not', () => {
    cy.url().should('include', 'edit')
  })

  it('Check Edit Driver title in Edit Driver page', () => {
    cy.contains('Edit Driver')
  })

  it('Edit driver page', () => {
    cy.get('input[name="phone"]')
      .clear()
      .type('9287382749')
    cy.get('input[name="bankName"]')
      .clear()
      .type('SBH')
    cy.get('input[name="bankBranch"]')
      .clear()
      .type('S R Nagar')
    cy.get('input[name="branchIFSCNumber"]')
      .clear()
      .type('ICIC2938')
    cy.getAllByText(/submit/i).click()
  })
  it('Verify whether user navigating to drivers list page or not while submitting the form', () => {
    cy.url().should('include', 'drivers')
  })

  it('Edit driver page - validations for null data', () => {
    cy.getByText(/next/i)
      .click()
      .click()
      .click()
      .click()
    cy.getByText('ashika')
      .siblings()
      .last()
      .children()
      .children()
      .first()
      .click()
    cy.get('input[name="name"]').clear()
    cy.get('input[name="phone"]').clear()
    cy.get('input[name="driverLicence"]').clear()
    cy.get('input[name="adharNumber"]').clear()
    cy.get('select[name="shift"]').select('morning')
    cy.get('input[name="address1"]').clear()
    cy.get('input[name="address2"]').clear()
    cy.get('input[name="accountName"]').clear()
    cy.get('input[name="accountNumber"]').clear()
    cy.get('input[name="confirmAccountNumber"]').clear()
    cy.get('input[name="bankName"]').clear()
    cy.get('input[name="bankBranch"]').clear()
    cy.get('input[name="branchIFSCNumber"]').clear()
    cy.get('input[name="verified"]').check('yes')
    cy.get('input[name="emergencyContactPerson"]').clear()
    cy.get('input[name="emergencyContactNumber"]').clear()
    cy.get('select[name="relation"]').select('father')
    cy.getAllByText(/submit/i).click()
  })

  it('Back to Drivers home page', () => {
    cy.go('back')
  })
  it('Assign page navigation and check it it navigating to Assign page or not', () => {
    cy.getByText('ashika')
      .siblings()
      .last()
      .children()
      .first()
      .click()
  })
  it('Check Assign Driver title in  assign driver page', () => {
    cy.contains('Assign')
  })
  it('Validations for empty fields in assign button', () => {
    cy.getAllByText(/submit/i).click()
  })
  it('back to drivers list for further testing', () => {
    cy.go('back')
  })
  it('Assignin driver for valid data', () => {
    cy.getByText('ashika')
      .siblings()
      .last()
      .children()
      .first()
      .click()
    cy.get('select[name="vehicleNumber"]').select('TSO1A0429')
    cy.get('input[name="batteryId"]').type('12345')
    cy.get('input[name="client"]').type('Amazon')
    cy.getAllByText(/submit/i).click()
  })
  it('back to drivers list for further testing', () => {
    cy.go('back')
  })
  it('Reset functionality for assign page', () => {
    cy.getByText('ashika')
      .siblings()
      .last()
      .children()
      .first()
      .click()
    cy.get('select[name="vehicleNumber"]').select('TSO1A0429')
    cy.get('input[name="batteryId"]').type('12345')
    cy.get('input[name="client"]').type('Amazon')
    cy.getAllByText(/reset/i).click()
  })

  it('Navigate to Velhicles table', () => {
    cy.getByText(/^vehicles/i).click()
  })
})
