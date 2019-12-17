import { loginPage } from '../pages/Login.page';
import { loginAssert } from '../asserts/Login.assert';
import { context } from '../../data/Context';

describe('Authentication page.', () => {
  before(() => {
      loginPage.open();
  });

  it('Should display a info message about wrong user or password', () => {
    
    loginAssert.checkUserOrPasswordIncorrect();
  });

  it('Should display user name on the page.', () => {
    loginAssert.checkUserName(context.logins.user.name);
  });

});
