describe('empty spec', () => {
  beforeEach(() => {
    cy.viewport(1800, 1000);
    cy.visit('http://localhost:8080/search');
  });

  it('Search', () => {
    cy.intercept('http://localhost:4000/movies?limit=40&offset=0').as(
      'getMovies'
    );
    cy.intercept({ url: 'https://image.tmdb.org/**' }).as('getImage');
    cy.wait('@getMovies');
    for (let i = 0; i < 30; i++) {
      cy.wait('@getImage');
    }
    cy.get('.search__container input').type('test');
    cy.get('.search__container button').click();
    cy.findAllByRole('img').filter('.poster').eq(0).click();
  });
});
