describe('Pause Game', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
  })

  describe('Pause button', () => {
    it('pauses the world map simulation', () => {
      cy.get('#pause').click()
      cy.get('#pause-indicator')
        .should('contain', 'paused');
    });
  });
});
