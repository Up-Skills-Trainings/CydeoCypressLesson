describe('Testing Iframes with Cypress Framework', () => {
  beforeEach('Visit the testing the site', () => {
    cy.visit('/iframe');
  });

  it('Verify that we have ifarme body and text', () => {
    // we create a function that will return iframe body then we will verify elements
    const getIframeBody = () =>
      cy.get('#mce_0_ifr').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap);

    // Assert that iframe is visible
    getIframeBody().should('be.visible');
    // assert that iframe contains text
    getIframeBody().should('contain', 'Your content goes here.');
  });
});
