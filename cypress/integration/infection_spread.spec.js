describe('Infection spread', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  describe('Infected map', () => {
    it('has an infected cell', () => {
      
      cy.get('.grid .infected')
        .should(($cell) => {
          expect($cell.length).to.be.greaterThan(1)
        })
    });
  });
});
