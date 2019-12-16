import { assert } from 'chai';
import { loginPage } from '../pages/Login.page.js';

class LoginAsserts {
  checkUserLoggedMessage() {
    assert.equal(
      loginPage.welcomeMessage.getText(),
      systemMessages.FEEDBACK_USER_LOGGED,
    );
  }
}

export const loginAsserts = new LoginAsserts();
