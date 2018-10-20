describe('Loading screens', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

    it('Shows loading screen', () => {
      cy.contains('Loading...')
    });
});
