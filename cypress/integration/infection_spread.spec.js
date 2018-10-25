describe('Infection spread', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
  })

  describe('Infected map', () => {
    it('has an infected cell', () => {

      cy.get('.infected')
        .should(($cell) => {
          expect($cell.length).to.be.greaterThan(0)
        })
    });
  });
});
