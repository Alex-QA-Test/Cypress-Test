/// <reference types="Cypress" />
describe('template spec', () => {
  const mySecret = Cypress.env('TEST_URL')
  it('passes', () => {
    cy.visit(mySecret)
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying')
  })
})
