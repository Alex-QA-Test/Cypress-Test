/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
     const mySecret = Cypress.env('URL')
     const mySecret1 = Cypress.env('TEST_URL')
     cy.log(mySecret)
    cy.log(mySecret1)
    cy.log('23454356')
   /* cy.visit(mySecret)
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying') */
  })
})
