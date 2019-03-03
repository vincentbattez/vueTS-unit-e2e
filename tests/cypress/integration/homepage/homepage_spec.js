// https://docs.cypress.io/api/introduction/api.html

describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Logo should be present', () => {
    cy.get('.home .logo').should('be.visible')
  })
})
