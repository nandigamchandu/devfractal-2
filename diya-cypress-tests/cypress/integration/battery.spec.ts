/// <reference types="Cypress" />

import { Context } from 'mocha'

context('navigation to batteries page', () => {
  const url = '/batteries'
  it('Navigate to Batteries page', () => {
    cy.visit(url)
    cy.url().should('include', 'batteries')
  })
  it('Check Batteries title in Batteries home page', () => {
    cy.contains('Batteries')
  })
  it('Validations for empty data in create battery page', () => {
    cy.getByText(/Add Battery/i).click()
    cy.get('input[name="batteryMake"]').click()
    cy.get('input[name="batteryModel"]').click()
    cy.getByText('this is a required field').should(
      'contain',
      'this is a required field',
    )
    cy.go('back')
  })
  it('Check  Create battery title in Add battery page', () => {
    cy.getByText(/Add Battery/i).click()
    cy.contains('Add Battery')
  })
  it('Add Battery - Create battey Page - Submit button for valid data', () => {
    cy.get('input[name="batteryMake"]').type('Lead')
    cy.get('input[name="batteryModel"]').type('Ab-123')
    cy.get('input[name="lastCharged"]')
      .clear()
      .type('26/09/2018')
    cy.get('input[name="capacity"]').type('320')
    cy.get('input[name="batteryCycles"]').type('320')
    cy.getAllByText(/submit/i).click()
  })
  it('Add Battery - Create battey Page - Reset functionality', () => {
    cy.getByText(/Add Battery/i).click()
    cy.get('input[name="batteryMake"]').type('Lead')
    cy.get('input[name="batteryModel"]').type('Ab-123')
    cy.get('input[name="lastCharged"]')
      .clear()
      .type('26/09/2018')
    cy.get('input[name="capacity"]').type('320')
    cy.get('input[name="batteryCycles"]').type('320')
    cy.getAllByText(/reset/i).click()
  })
  it('Back to Batteries page for further testing', () => {
    cy.go('back')
  })
  it('edit page navigation and check its title', () => {
    cy.getByText('Apu sumbiza nesub wigawi.')
      .siblings()
      .last()
      .children()
      .children()
      .first()
      .click()
    cy.contains('Edit Battery')
  })
  it('edit Battery - edit battey Page - editing details', () => {
    cy.get('input[name="batteryMake"]')
      .clear()
      .type('silicon')
    cy.get('input[name="batteryModel"]')
      .clear()
      .type('Ac-123')
    cy.get('input[name="lastCharged"]')
      .clear()
      .type('7/09/2018')
    cy.get('input[name="capacity"]')
      .clear()
      .type('325')
    cy.getAllByText(/submit/i).click()
  })
  it('Back to client page', () => {
    cy.visit(url)
  })
  it('edit Battery - edit battey Page - for null data', () => {
    cy.getByText('Apu sumbiza nesub wigawi.')
      .siblings()
      .last()
      .children()
      .children()
      .first()
      .click()
    cy.get('input[name="batteryMake"]').clear()
    cy.get('input[name="batteryModel"]').clear()
    cy.get('input[name="lastCharged"]').clear()
    cy.get('input[name="capacity"]').clear()
    cy.get('input[name="batteryCycles"]').clear()
    cy.getAllByText(/submit/i).click()
  })
  it('Back to battey page', () => {
    cy.visit(url)
  })
  it('Assign page navigation', () => {
    cy.getByText('Apu sumbiza nesub wigawi.')
      .siblings()
      .last()
      .children()
      .first()
      .click()
  })
  it('Check Assign battey title in  assign battey page', () => {
    cy.contains('Assign')
  })
  it('Validations for empty fields in assign button', () => {
    cy.getAllByText(/submit/i).click()
  })
  it('back to battey list for further testing', () => {
    cy.go('back')
  })
  it('Assignin battey for valid data', () => {
    cy.getByText('Apu sumbiza nesub wigawi.')
      .siblings()
      .last()
      .children()
      .first()
      .click()
    cy.get('input[name="client"]').type('Amazon')
    cy.get('input[name="vehicleID"]').type('12345')
    cy.get('input[name="driver"]').type('ashika')
    cy.getAllByText(/submit/i).click()
  })
  it('back to battey list for further testing', () => {
    cy.go('back')
  })
  it('Reset functionality for assign page', () => {
    cy.getByText('Apu sumbiza nesub wigawi.')
      .siblings()
      .last()
      .children()
      .first()
      .click()
    cy.get('input[name="client"]').type('Amazon')
    cy.get('input[name="vehicleID"]').type('12345')
    cy.get('input[name="driver"]').type('ashika')
    cy.getAllByText(/reset/i).click()
  })

  it('Navigate to Velhicles table', () => {
    cy.getByText(/^users/i).click()
  })
})
