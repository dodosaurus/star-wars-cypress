/// <reference types="cypress" />

describe("Planets API", () => {
  const data = require("../../fixtures/testdata/planets_testing.json");

  data.forEach((item) => {
    it("Testing planet with index: " + item.planetIndex, () => {
      cy.api("planets/" + item.planetIndex).should((response) => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property("headers");
        expect(response).to.have.property("duration");
        expect(response.body).to.deep.contain({
          name: `${item.expectedPlanetName}`,
        });
      });
    });
  });
});
