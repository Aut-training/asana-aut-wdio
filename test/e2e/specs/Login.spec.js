import { loginPage } from '../pages/Login.page.js';
import { loginValidation } from '../validations/Login.validation.js';
import { context } from '../../data/Context.js';

describe('Authentication page.', () => {
  before(() => {
      loginPage.open();
  });

  it('Displays login message successfully.', () => {
    loginPage.login(context.logins.user);
    loginValidation.checkUserLoggedMessage();
  });

  it('Displays user name on the page.', () => {
    loginValidation.checkUserName(context.logins.user.name);
  });
});