describe('Testing Drag and Drop with Cypress Framework', () => {
    beforeEach('Visit the testing the site', () => {
      
    });
  
    xit('Verify that we have drag box A to box B', () => {
      // create a datTransfer object to hold event action information
      cy.visit('/drag_and_drop');
      const dataTransfer = new DataTransfer();

      cy.get('#column-a').trigger('dragstart', {
        dataTransfer,
        });

      // provide target element locator
      cy.get('#column-b').trigger('drop', {
        dataTransfer,
      });  
    });

    it('Verify dragging with drag and drop plugin in cypress', () => {
        cy.visit('/drag_and_drop');
       // install this plugin with  npm i cypress-drag-drop
       cy.get('#column-a').drag('#column-b');
    })

    it('Verify circles dragging in practice cydeo', () => {
        cy.visit('/drag_and_drop_circles');

        
    })
  });