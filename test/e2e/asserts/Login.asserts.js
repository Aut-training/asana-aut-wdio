import { assert } from 'chai';
import { loginPage } from '../pages/Login.page';
import * as systemMessages from '../constants/SystemMessages.constant';

class LoginAsserts {
  checkUserLoggedMessage() {
    assert.equal(
      loginPage.welcomeMessage.getText(),
      systemMessages.FEEDBACK_USER_LOGGED
    );
  }

  checkUserOrPasswordIncorrect() {
    assert.equal(
      loginPage.wrongUserOrPassword.getText(),
      systemMessages.FEEDBACK_USER_OR_PASSWORD_INCORRECT
    );
  }
}

export const loginAsserts = new LoginAsserts();
