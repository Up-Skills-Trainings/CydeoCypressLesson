describe('Testing Hover Over with Cypress Framework', () => {
  
    it('Verify that hover function works at amazon', {baseUrl: "https://www.amazon.com/"}, () => {
        
        // even though we change base url we need to write visit() function to navigate that page
        cy.visit('');
        
        // locate the element that you will hover over and trigger mouseover action
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover');

        // locate a link using text of the link, we don't have xpath locators in cypress
        cy.contains('Create a List').click();

        cy.url().should('include','wishlist/intro');
    });
  });