describe("Landing page", () => {
    it("Main elements", () => {
      cy.visit('https://swapi.dev/')

      cy.get('.jumbotron').then(el => {
        expect(el).to.contain.text('SWAPI')
        expect(el).to.contain.text('The Star Wars API')
        expect(el).to.contain.text('(what happened to swapi.co?)')
      })

      cy.get('.jumbotron > :nth-child(3) > a').click()

      cy.url().should('include', '/about')

    });
  });
  