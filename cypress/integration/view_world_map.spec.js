describe('World map', () => {
  it('shows the game title', () => {
    cy.visit('http://localhost:3000');

    cy.get('h1')
      .should('contain', 'World Map');
  });
});