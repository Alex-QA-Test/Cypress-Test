/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
     const mySecret = Cypress.env('TEST_URL')
     cy.log(mySecret)
   /* cy.visit(mySecret)
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying') */
  })
})
