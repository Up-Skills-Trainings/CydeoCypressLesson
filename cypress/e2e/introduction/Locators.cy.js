describe('Find or Get Elements by Using Different Locators', () => {
  beforeEach('Navigate to Login Page', () => {
    cy.clearCookies();
    cy.visit('/login');
  });

  it('Check Different Locator Strategies', () => {
    // by CSS locator
    // cy.get("input[name='username']") this statement creates an object that can be chained
    cy.get("input[name='username']").type('CydeoStudent');

    // locate the same element with attribute name and value' then clear the box
    cy.get("[type='text']").clear();

    // when we get multiple elements with a tagName tag
    cy.get('input').each((item, index, list) => {
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // locate Login button with text
    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by traveling through DOM', () => {
    // locate username box, go up to parent form then navigate to child Login button
    cy.get("input[name='username']")
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it('Check Different Type of Assertions', () => {
    // implicit: Should Assertions
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    // explicit: expect() Assertions
    cy.get('#wooden_spoon').then((buttonElement) => {
      expect(buttonElement).to.have.text('Login');
      expect(buttonElement).to.have.class('btn btn-primary');
    });
  });
});
