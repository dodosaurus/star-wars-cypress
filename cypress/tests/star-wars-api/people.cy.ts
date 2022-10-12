describe("People API", () => {
  it("get all the people", () => {
    cy.api("people").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body.count).to.be.greaterThan(0);
      expect(response.body.results).to.not.be.empty;
    });
  });

  it("get first", () => {
    cy.api("people/1").should((response) => {
      console.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body).to.have.property("name");
    });
  });

  it("get last", () => {
    cy.api("people/82").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body).to.have.property("name");
    });
  });

  it("get last + 1", () => {
    cy.api({
      url: "people/84",
      failOnStatusCode: false,
    }).should((response) => {
      expect(response.status).to.eq(404);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body).to.deep.equal({
        detail: "Not found",
      });
    });
  });
});
