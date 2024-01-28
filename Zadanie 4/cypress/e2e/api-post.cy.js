/// <reference types="cypress" />

describe("POST - httpbit incorrect url", () => {
  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("resposne should be 200", () => {
    cy.request(request).then((response) => {
      const currentStatus = response.status;
      const expectedStatus = 200;

      assert.equal(expectedStatus, currentStatus);
    });
  });
});

describe("httpbin use get on post", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 405", () => {
    cy.request(request).then((response) => {
      assert.equal(405, response.status);
    });
  });
});
