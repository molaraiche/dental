describe("Submit booking request", () => {
  it("Make a booking request", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".px-1 > :nth-child(3) > .px-4").click();
    cy.get("#name").type("Mohamed Laraiche");
    cy.get("#phoneNumber").type("+212663733223");
    cy.get("#email").type("laraichemohamed@gmail.com");
    cy.get("#message").type(
      "Hi doctor, I need to book a visit as soon as possible. Looking forward to your response."
    );
    cy.get(".react-datepicker__input-container > .h-10").type(
      "04/23/2025, 2:45 PM"
    );
    cy.get(".inline-flex").click();
  });
});
