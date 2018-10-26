describe('News Headlines', () => {
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

  it('displays a news headline on the page', () => {
    cy.get('#headline').should(($headline) => {
      expect($headline.length).to.equal(1)
    })
  });
});
