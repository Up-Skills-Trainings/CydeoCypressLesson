describe('Testing Alerts in Cypress Env', { baseUrl: 'https://demoqa.com/' }, () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/alerts');
  });

  it('Check Alert Confirmation', () => {
    /**
     * Browser Commands: window:alert, window:confirmation, window:on etc...
     */

    const stub = cy.stub();
    cy.on('window:confirm', stub); // this action stores confirmation into stub function
    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
      });
    cy.on('window:confirm', () => true);
    cy.contains('You selected Ok').should('be.visible');
  });

  it('Check Alert Cancelation', () => {
    const stub = cy.stub();
    cy.on('window:confirm', stub); // this action stores confirmation into stub function
    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
      });
    cy.on('window:confirm', () => false); // clicked on cancel button
    cy.contains('You selected Cancel').should('be.visible');
  });
});
