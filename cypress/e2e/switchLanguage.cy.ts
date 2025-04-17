describe("Switch Language", () => {
  it("Switch language to French", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".px-1 > :nth-child(3) > :nth-child(2) > .border").select("fr");
  });
});
