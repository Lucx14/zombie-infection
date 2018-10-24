describe('Stats', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
    cy.get('#stats').click()
  })

    it('Shows stats page', () => {
      cy.contains('Stats')
    });

    it('Displays the various abilities', () => {
      cy.contains('Speed')
      cy.contains('Resilience')
      cy.contains('Aggression')
    });
    
});