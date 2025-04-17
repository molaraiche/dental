describe("Login to admin", () => {
  it("go to dental", () => {
    cy.visit("http://localhost:3000/admin");
    cy.get(".curosr-pointer").click();
  });
});
