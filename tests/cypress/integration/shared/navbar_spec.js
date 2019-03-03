describe('Navbar tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('test all links', () => {
    const currentRouteClass = 'router-link-exact-active router-link-active'
    const listLinks = '.nav a'
    let home = {
      selector: `${listLinks}:nth-child(1)`,
      text: 'Home',
      url: '/',
      isActive: true
    }
    let about = {
      selector: `${listLinks}:nth-child(2)`,
      text: 'About',
      url: '/about',
      isActive: false
    }
    const secret = {
      selector: `${listLinks}:nth-child(3)`,
      text: 'Secret link',
      url: '/secret',
      isActive: false
    }

    cy.get(secret.selector).should('not.be.visible')
    cy.checkNavLinkLength(listLinks, 2)
    cy.checkNavLink(home)
    cy.checkNavLink(about)
      .click().then(() => {
        home.isActive = false
        about.isActive = true
      })

    cy.checkNavLinkLength(listLinks, 3)
    cy.checkNavLink(secret).and('be.visible')
    cy.get(home.selector).should('not.have.class', currentRouteClass)
    cy.get(about.selector).should('have.class', currentRouteClass)
  })
})
