describe('Button Elements Manipulation', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  it('Check Different Button Locators and Actions', () => {
    // locate an element with text and do action on it
    cy.contains('Button 2').should('be.visible').click();
    // assert that we clicked
    cy.contains('Clicked on button two!').should('be.visible');

    // Locate all buttons with class attribute and select button 3 and click
    cy.get('.btn.btn-primary').then((buttons) => {
      cy.wrap(buttons).eq(2).click();
      cy.contains('Clicked on button three!').should('be.visible');
    });

    // locate all buttons with tagname then verify each of them has attribute of onclick
    cy.get('button').each((item, index, list) => {
      // verify we have 6 buttons
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });
  });

  it('Verify element text of buttons', () => {
    // Select All Buttons and Verify Text Then Click
    cy.get('button').each((item) => {
      if (item.text() === 'Button 4') {
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });
  });
});
