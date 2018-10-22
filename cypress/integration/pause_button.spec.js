describe('Pause Game', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  describe('Pause button', () => {
    it('pauses the world map simulation', () => {
      cy.get('#pause').click()
      cy.get('#pause-indicator')
        .should('contain', 'paused');
    });
  });
});
