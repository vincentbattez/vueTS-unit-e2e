// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("checkNavLink", (link) => {
  const currentRouteClass = 'router-link-exact-active router-link-active'
  let conditionClass = link.isActive ? 'have.class' : 'not.have.class'

  let expectation =
    cy.get(link.selector)
      .should('contain', link.text)
      .and('have.attr', 'href', link.url)

  return expectation.and(conditionClass, currentRouteClass)
})

Cypress.Commands.add("checkNavLinkLength", (links, nbLinks) => {
  cy.get(links)
    .should(($links) => 
      expect($links, `${nbLinks} links`).to.have.length(nbLinks)
    )
})
