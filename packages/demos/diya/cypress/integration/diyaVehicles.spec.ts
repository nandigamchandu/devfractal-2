/// <reference types="Cypress" />

context('Vehicle Module', () => {

    it('Navigate to diya home page', () => {
    
        cy.visit('http://diya-ti.devti.in:1234/vehicles')
    
    })
    
    it('Add Vehicle Page', () => {

     cy.get('#root > div > div:nth-child(2) > section > div > a').click()
 
    })
  
    it('Add Vehicle - Create Vehicle Page - Submit button for valid data', () => {
    
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(1) > div > input').type('Testing')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(2) > div > input').type('test')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(3) > div > input').type('2018')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(4) > div > input').type('Blue')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(1) > div > input').type('826383279')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(2) > div > input').type('3')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(3) > div > div > div > input')
          .clear()
          .type('09/26/2019')
          .type('{enter}')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(4) > div > div > div > input').clear().type('10/01/2019')
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()

    })

     it('Add Vehicle - Create vehicle Page - Reset Functionality', () => {
         cy.get('#root > div > div:nth-child(2) > section > div > a').click()
         cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(1) > div > input').type('Testing')
         cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(2) > div > input').type('test')
         cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(3) > div > input').type('2018')
         cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(2) > button').click()
         
     })

     it('navigate to vehicles home page again', () => {

       cy.go('back')
     })
     
     it('Edit Functionality', () => {
         cy.get('#root > div > div:nth-child(2) > section > table > tbody > tr:nth-child(1) > td:nth-child(7) > a:nth-child(1) > span > svg').click()
         cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(1) > div > input')
           .clear()
           .type('tests')
         cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(2) > div > input')
           .clear()
           .type('testing')
           cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()
      
      })
      it('validations for null data', () => {

        cy.get('#root > div > div:nth-child(2) > section > table > tbody > tr:nth-child(1) > td:nth-child(7) > a:nth-child(1) > span > svg').click()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(1) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(2) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(3) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div > div:nth-child(4) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(1) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(2) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(3) > div > div > div > input')
          .clear()
          .type('{enter}')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div > div:nth-child(4) > div > div > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()

      })
      it('navigate to vehicles home page again', () => {

        cy.go('back')
      })

})