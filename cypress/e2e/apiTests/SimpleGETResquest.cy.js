describe('How to do API request with cypress', () => {
  it('Verify Bookstore Books collection with GET request', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      // verify body object
      expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns');
      // verify headers
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });
});
