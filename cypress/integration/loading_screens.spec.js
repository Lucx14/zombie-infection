describe('Loading screens', () => {
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

    it('Shows loading screen', () => {
      cy.contains('Loading...')
    });
});
