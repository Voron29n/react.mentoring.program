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
    expect(cy.wait(Array(10).fill('@getImage')));
    cy.findAllByRole('img', { timeout: 10000 })
      .filter('.poster')
      .should('have.length', 9);
  });

  it('Search with MovieDetail', () => {
    cy.intercept('http://localhost:4000/movies?limit=40&offset=0').as(
      'getMovies'
    );
    cy.intercept({ url: 'https://image.tmdb.org/**' }).as('getImage');
    cy.wait('@getMovies');
    cy.findAllByRole('img', { timeout: 10000 })
      .filter('.poster')
      .should('have.length', 9);

    cy.get('.search__container input').type('test');
    cy.get('.search__container button').click();

    const poster = cy
      .findAllByRole('img', { timeout: 10000 })
      .filter('.poster');
    poster.should('have.length', 1);
    poster.eq(0).click();
    expect(cy.get('.movie__detail', { timeout: 10000 }));
  });
});
