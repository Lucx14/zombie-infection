describe('World map', () => {
  it('shows the game title', () => {
    cy.visit('http://localhost:3000');

    cy.get('h1')
      .should('contain', 'World Map');
  });

  it('shows the available levels', () => {
    cy.visit('http://localhost:3000');

    cy.get('container button')
      .should('have.length', 2)
  });
});
