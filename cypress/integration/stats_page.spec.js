describe('Stats', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
    cy.wait(2000)
    cy.get('#stats').click()
  })

    it('Shows stats page', () => {
      cy.contains('Stats')
    });

    it('Allows player to increase abilities with tokens', () => {
      cy.contains('Speed: 0')
      cy.contains('Tokens: 1')
      cy.get('#speedUp').click()
      cy.contains('Speed: 1')
      cy.contains('Tokens: 0')
    });

    it('Shows special abilities', () => {
      cy.contains('SPECIAL ABILITIES:')
    });
});
