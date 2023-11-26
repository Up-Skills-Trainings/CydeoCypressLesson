describe('Different Type Input Fields Tests', () => {
  beforeEach('Navigate to Login Page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it('Input Boxes Test', () => {
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Brown');
    cy.get('input[name="username"]').type('CrazyHeart');
    cy.get('input[name="email"]').type('testuser@cydeo.com');
    cy.get('input[name="password"]').type('CyTest123');
    cy.get('input[name="phone"]').type('555-000-1234');
  });

  it('Check different radio button actions', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radioButtons) => {
        // get all radio button, find the first one check it and assert that it is checked
        cy.wrap(radioButtons).first().check().should('be.checked');

        // use index of the list element then check and verify
        cy.wrap(radioButtons).eq(1).check().should('be.checked');
        // VERIFY THAT THIRD ONE NOT CHECKED
        cy.wrap(radioButtons).eq(2).should('not.be.checked');
      });
  });

  it('Check Different Type of CheckBox Actions', () => {
    cy.get('[type="checkbox"]').then((checkbox) => {
      // check Java box and verify checked
      cy.wrap(checkbox).eq(1).check().should('be.checked');
      // uncheck and assert unchecked
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
      // verify that third box value is JavaScript' then check and assert
      cy.wrap(checkbox).eq(2).should('have.value', 'javascript').check().should('be.checked');
    });
  });

  it('Check Select Dropdown and select a single chioce', () => {
    // locate top select menu locator' then use select function
    cy.get('select[name="job_title"]').select('SDET');

    // locate the same menu again and verify the value contains SDET
    cy.get('select[name="job_title"]').contains('SDET').should('have.value', 'SDET');
  });

  it('Check all of the Select Dropdown Options', () => {
    cy.fixture('departments').then((departments) => {
      cy.get('select[name="department"] > option').each((option, index, allOptions) => {
        // get each option text
        const optionText = option.text();

        cy.get('select[name="department"]')
          .select(optionText)
          .should('have.value', option.val())
          .contains(departments[index]);
      });
    });
  });
});
