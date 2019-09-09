/// <reference types="Cypress" />
context('Driver Module', () => {

    it('Navigate to diya home page', () => {
    
        cy.visit('http://192.168.0.111:1234')
    
    })
    
    it('Add Driver - Create driver Page - Submit button for valid data', () => {

        cy.getByText(/add driver/i).click()
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
    
    it('Add Driver - Create driver Page - Reset Functionality', () => {
        cy.getByText(/add driver/i).click()
        cy.get('input[name="name"]').type('ashika')
        cy.get('input[name="phone"]').type('9287382749')
        cy.get('input[name="driverLicence"]').type('7632hgashd')
        cy.get('input[name="adharNumber"]').type('923887239323')
        cy.get('select[name="shift"]').select('morning')
        cy.get('input[name="address1"]').type('Mpp Colony')
        cy.get('input[name="address2"]').type('Hyderabad') 
        cy.getAllByText(/reset/i).click()
        
    })
    
    it('Add Driver - created driver page - Submit button for empty data ', () => {
         
          cy.go('back')
    
     })

    it('Edit driver page', () => {
       cy.getByText('Virat').siblings().last().children().first().click()
        //  @ todoedit functionality
       cy.get('input[name="phone"]')
        .clear()
        .type('9287382749')
       cy.get('input[name="bankName"]').clear()
         .type('SBH')
       cy.get('input[name="bankBranch"]').clear()
         .type('S R Nagar')
       cy.get('input[name="branchIFSCNumber"]').clear()
          .type('ICIC2938')
       cy.getAllByText(/submit/i).click()
     })

     it('Edit driver page - validations for null data', () => {
       cy.getByText('Virat').siblings().last().children().first().click()
        cy.get('input[name="name"]').clear()
        cy.get('input[name="phone"]').clear()
        cy.get('input[name="driverLicence"]').clear()
        cy.get('input[name="adharNumber"]').clear()
        cy.get('select[name="shift"]').select('Select')
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
        cy.get('select[name="relation"]').select('select')
        cy.getAllByText(/submit/i).click()
       
       })

      it('Back to Drivers home page', () =>{

          cy.go('back')
      })
     
  })