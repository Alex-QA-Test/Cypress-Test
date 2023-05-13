/// <reference types="Cypress" />
const mySecret = Cypress.env('TEST_URL')
describe('template spec', () => {
  it('passes', () => {
     cy.log(mySecret)
    cy.log('23454356')
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('text', TEST_URL)
    cy.get('a').should('include.text', 'Querying') 
  })
})
