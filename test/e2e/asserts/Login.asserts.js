const loginPage = require('../pages/Login.page');
const systemMessages = require('../constants/SystemMessages.constant');
const assert = require('chai').assert;

class LoginAssert {
  checkMessageForWrongPassword(){
    assert.strictEqual(
      loginPage.messageIncorrectUserOrPassword.getText(),
      systemMessages.FEEDBACK_USER_INCORRECT
    );
  }

  checkMessageWelcome(){
    assert.strictEqual(
      loginPage.messageWelcome.getText(),
      systemMessages.FEEDBACK_MESSAGE_AFTER_LOGIN
    );
  }
}

module.exports = new LoginAssert();
