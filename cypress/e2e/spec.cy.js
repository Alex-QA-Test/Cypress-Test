/// <reference types="Cypress" />
const mySecret = Cypress.env('SECRET_VALUE')
describe('template spec', () => {
  it('passes', () => {
     cy.log(mySecret)
    cy.visit(mySecret)
    cy.get('h1').should('text', 'Kitchen Sink')
    cy.get('a').should('include.text', 'Querying') 
  })
})
