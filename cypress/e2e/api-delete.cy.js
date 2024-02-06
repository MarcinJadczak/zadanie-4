/// <reference types="cypress" />

describe("DELETE - httpbit return 200", () => {
  it("resposne should be 200", () => {
    cy.request("https://httpbin.org/delete").its("status").should("eq", 200);
  });
});

describe("DELETE - httpbit work with response", () => {
  it("resposne should be 200", () => {
    cy.request("https://httpbin.org/delete").then((response) => {
      const currentStatus = response.status;
      const expectedStatus = 200;

      assert.equal(expectedStatus, currentStatus);
    });
  });
});

describe("httpbin use get on delete", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/delete",
    failOnStatusCode: false,
  };

  it("response code should be 405", () => {
    cy.request(request).then((response) => {
      assert.equal(405, response.status);
    });
  });
});
