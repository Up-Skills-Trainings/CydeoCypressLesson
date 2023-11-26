describe('Cypress File Upload Test', () => {
  it('Verify file uploaded', () => {
    cy.visit('/upload');

    /**
     * 1. npm install -dev cypress-file-upload
     * 2. import the function
     * 3. add file to fixture
     */

    cy.get('#file-upload').attachFile('pic.png');
    cy.get('#file-submit').click();
    // assert that it is uploaded
    cy.get('#uploaded-files').then(() => {
      cy.contains('pic.png').should('be.visible');
    });
  });
});
