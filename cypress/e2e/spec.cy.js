/// <reference types="Cypress" />
const mySecret = Cypress.env('test_url')
describe('template spec', () => {
  it('passes', () => {
     cy.log(mySecret)
    cy.log('23454356')
   /* cy.visit(mySecret)
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying') */
  })
})
