import { navigateTo } from '../../support/pages/Navigation';
import { auth } from '../../support/pages/Auth';

const LoginLocators = require('../../support/pages/Auth');

describe('Auth: Login user with different ways', () => {
  beforeEach(() => {
    cy.clearAllCookies();
    navigateTo.loginPage(); // called it from page object model
  });

  it('Happy path Login scenario', () => {
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);
    });

    cy.textExists('You logged into a secure area!');
  });

  it('Happy path Login scenario with page locators', () => {
    cy.fixture('user').then((user) => {
      LoginLocators.locators.userName.type(user.user2.username);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();

      cy.textExists('You logged into a secure area!');
    });
  });
});
