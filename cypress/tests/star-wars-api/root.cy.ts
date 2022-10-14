import spok from "cy-spok";

describe("Root", () => {
  let expectedResourcesInOrder = [
    "people",
    "planets",
    "films",
    "species",
    "vehicles",
    "starships",
  ];

  it("Get all URLs - happy path", () => {
    cy.getRoot().then((res) => {
      let keys = Object.keys(res.body);
      cy.wrap(keys).should(spok(expectedResourcesInOrder));

      expectedResourcesInOrder.forEach((key, index) => {
        let expURL = `${Cypress.config("baseUrl")}/${
          expectedResourcesInOrder[index]
        }/`;
        expect(res.body[key]).to.be.eq(expURL);
      });
    });
  });
});
