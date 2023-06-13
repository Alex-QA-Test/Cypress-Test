/// <reference types="Cypress" />
//const mySecret = Cypress.env('SECRET_VALUE')
describe('template spec', () => {
  it('passes', () => {
     //cy.log(mySecret)
    cy.visit('https://www.cypress.io/')
    cy.url().should('eq', 'https://www.cypress.io')
    //cy.get('h1').should('text', ' Test. Automate. ')
    //cy.get('a').should('include.text', 'Querying') 
  })
})
