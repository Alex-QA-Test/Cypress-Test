/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying')
  })
})