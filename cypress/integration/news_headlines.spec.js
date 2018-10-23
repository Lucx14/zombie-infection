describe('News Headlines', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('#start-button').click()
  })

  it('displays a news headline on the page', () => {
    cy.get('#headline').should(($headline) => {
      expect($headline.length).to.equal(1)
    })
  });
});
