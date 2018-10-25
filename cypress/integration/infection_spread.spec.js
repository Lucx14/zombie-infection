describe('Infection spread', () => {
  beforeEach(function () {
    window.HTMLMediaElement.prototype.load = () => {}
    window.HTMLMediaElement.prototype.play = () => {}
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
  })

  describe('Infected map', () => {
    it('has an infected cell', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('something about the error')
        done()
        return false
      })
      cy.get('.infected')
        .should(($cell) => {
          expect($cell.length).to.be.greaterThan(0)
        })
    });
  });
});
