describe('Pause Game', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
    })
    cy.get('button:first').click()
    cy.get('button:first').click()
  })

  describe('Pause button', () => {
    it('pauses the world map simulation', () => {
      cy.get('#pause').click()
      cy.get('#pause-indicator')
        .should('contain', 'paused');
    });
  });
});
