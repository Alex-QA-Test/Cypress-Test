/// <reference types="Cypress" />
const URL = Cypress.env('TEST_URL')
describe('template spec', () => {
  it('passes', () => {
    cy.visit(URL)
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying')
  })
})
