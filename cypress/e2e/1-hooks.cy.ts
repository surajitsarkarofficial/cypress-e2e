before("before", () => {
  cy.log("Before block before Suite");
});
beforeEach("beforeEach", () => {
  cy.log("Before Each block before Suite");
});
after("after", () => {
  cy.log("After block before Suite");
});
afterEach("afterEach", () => {
  cy.log("After Each block before Suite");
});
describe("Suite 1", () => {
  before("before block", () => {
    cy.log("Before block inside suite 1");
  });
  beforeEach("Before Each", () => {
    cy.log("Before each block inside Suite 1");
  });
  after("after block", () => {
    cy.log("After block inside suite 1");
  });
  afterEach("After Each", () => {
    cy.log("After each block inside Suite 1");
  });

  it("test1", () => {
    cy.log("Suite 1 Test 1");
  });
  it("test2", () => {
    cy.log("Suite 1 Test 2");
  });
});

describe("Suite 2", () => {
  before("before block", () => {
    cy.log("Before block inside suite 2");
  });
  beforeEach("Before Each", () => {
    cy.log("Before each block inside Suite 2");
  });
  after("after block", () => {
    cy.log("After block inside suite 2");
  });
  afterEach("After Each", () => {
    cy.log("After each block inside Suite 2");
  });

  it("test1", () => {
    cy.log("Suite 2 Test 1");
  });

  it("test2", () => {
    cy.log("Suite 2 Test 2");
  });
});
