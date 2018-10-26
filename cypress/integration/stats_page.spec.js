describe('Stats', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
    })
    cy.get('button:first').click()
    cy.get('button:first').click()
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
