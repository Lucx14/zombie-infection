describe('World map', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('shows the game title', () => {
    cy.get('h1')
      .should('contain', 'World Map');
  });

  it('shows the available cities', () => {

    cy.get('button.city-button')
      .should('have.length', 2)
  });

  it('redirects to playable city', () => {
    cy.get('canvas')
    .should('have.length', 2)
  });
});
