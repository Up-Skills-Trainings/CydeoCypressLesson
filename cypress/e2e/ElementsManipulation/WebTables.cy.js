describe(
  'Navigate to different baseUrl and test WebTables',
  { baseUrl: 'https://demoqa.com/' },
  () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.visit('/webtables');
    });

    it('Check finding and editting a record', () => {
      cy.get('.rt-tbody')
        .contains('.rt-tr-group', 'Alden')
        .then((row) => {
          cy.wrap(row).find('[title="Edit"]').click();
          cy.get('#firstName').clear().type('Harvey');
          cy.get('#lastName').clear().type('Specter');
          cy.get('#submit').click();
          // made changes however stayed inside same row object
          cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Harvey');
          cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Specter');
        });
    });

    it('Check finding and deleting a record', () => {
      cy.get('.rt-tbody')
        .contains('.rt-tr-group', 'Alden')
        .then((row) => {
          cy.wrap(row).find('[title="Delete"]').click();
        });
      cy.get('.rt-tbody').should('not.contain', 'Alden');
      cy.get('#searchBox').type('Alden');
      cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
    });

    it('Check different age group exist or not', () => {
      const ageGroup = [29, 39, 45, 77];
      // loop through each age
      cy.wrap(ageGroup).each((age) => {
        cy.get('#searchBox').clear().type(age);
        if (age === 77) {
          // negative test screnario
          cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain', age);
          cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
        } else {
          // positive scenario
          cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', age);
          cy.get('.rt-tbody').contains('.rt-tr-group', age).should('have.length', 1);
        }
      });
    });

    it('Adding another record with a user input from fixture - Better Approach', () => {
      // click add button
      cy.get('#addNewRecordButton').click();
      cy.fixture('user').then((user) => {
        const columnNames = Object.keys(user.user1);
        const userData = Object.values(user.user1);
        cy.wrap(columnNames).each((columnName, index) => {
          cy.get(`#${columnName}`).type(`${userData[index]}`);
        });
        cy.get('#submit').click();

        // assert that new record is added
        cy.get('.rt-tbody')
          .contains('.rt-tr-group', userData[0])
          .then((row) => {
            cy.wrap(userData).each((value, index) => {
              cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
            });
          });
      });
    });
  },
);
