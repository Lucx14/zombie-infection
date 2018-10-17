describe('Local Game', () => {

  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.get('button.city-button:first').click()
  })

  it('shows the game title', () => {
    cy.get('h1')
      .should('contain', 'Local Map');
  });
});

describe ('player movement', () => {

  describe ('up', () =>  {
    it ('responds to w press for up', () => {
      cy.get('canvas').type('w')
    });
  });

  describe ('down', () =>  {
    it ('responds to s press for down', () => {
      cy.get('canvas').type('s')
    });
  });

  describe ('left', () =>  {
    it ('responds to a press for left', () => {
      cy.get('canvas').type('a')
    });
  });

  describe ('right', () =>  {
    it ('responds to d press for right', () => {
      cy.get('canvas').type('d')
    });
  });
});
