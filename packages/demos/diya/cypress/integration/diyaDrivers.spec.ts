/// <reference types="Cypress" />

context('Driver Module', () => {

    it('Navigate to diya home page', () => {
    
        cy.visit('http://diya-ti.devti.in:1234/')
    
    })
    
    it('Add Driver - Create driver Page - Submit button for valid data', () => {
    
        cy.get('#root > div > div:nth-child(2) > section > div > a').click()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(2) > div > input').type('Anusha')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(3) > div > input').type('9287382749')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(4) > div > input').type('7632hgashd')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(5) > div > input').type('83bhds732')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(6) > div > div > select').select('evening')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(2) > div > input').type('Anusha Yarra')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(3) > div > input').type('8327642874924')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(4) > div > input').type('8327642874924')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(5) > div > input').type('ICICI')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(6) > div > input').type('Himayath Nagar')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(7) > div > input').type('ICS8623')
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()
        
    })
    
    it('Add Driver - Create driver Page - Reset Functionality', () => {
    
     cy.get('#root > div > div:nth-child(2) > section > div > a').click()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(2) > div > input').type('Anusha')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(3) > div > input').type('9287382749')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(4) > div > input').type('7632hgashd')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(5) > div > input').type('83bhds732')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(6) > div > div > select').select('evening')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(2) > div > input').type('Anusha Yarra')
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(2) > button').click()
    
    })
    
    it('Add Driver - created driver page - Submit button for empty data ', () => {
    
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()
        cy.go('back')
    
    })

    it('Edit driver page', () => {
    
        cy.get('#root > div > div:nth-child(2) > section > table > tbody > tr:nth-child(1) > td:nth-child(5) > a:nth-child(1) > span > svg').click()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(3) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(3) > div > input').type('9287382749')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(6) > div > div > select').select('morning')
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()
    
    })

    it('Edit driver page - validations for null data', () => {
        cy.get('#root > div > div:nth-child(2) > section > table > tbody > tr:nth-child(1) > td:nth-child(5) > a:nth-child(1) > span > svg').click()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(2) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(3) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(4) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(5) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(1) > div:nth-child(6) > div > div > select').select('Select')
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(2) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(3) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(4) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(5) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(6) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.columns > div:nth-child(2) > div:nth-child(7) > div > input').clear()
        cy.get('#root > div > div:nth-child(2) > section > form > div.buttons.is-centered.are-medium > div > div:nth-child(1) > button').click()
       
    })

    it('Back to Drivers home page', () =>{

        cy.go('back')
    })
       
 })