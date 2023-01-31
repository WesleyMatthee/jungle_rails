describe('Add to cart', () => {

  it('renders the homepage', () => {
    cy.visit('/');
  });

  it("renders products on the page", () => {
    cy.get('.products article').should("be.visible");
  });

  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });



  it("adds item to cart when clicking on add button", () => {
    cy.contains("My Cart (0)").should("exist");
    cy.get('.btn > .fa').click({ force: true });
    cy.contains("My Cart (1)").should("exist");
  });
});