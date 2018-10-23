describe('Loading screens', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
  })

    it('Shows loading screen', () => {
      cy.contains('Loading...')
    });
});
