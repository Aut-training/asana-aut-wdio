class LoginPage {
  open(){
    browser.url('https://asana.com/es#login');
  }

  get inputEmail(){
    return $('#login-email-modal-login');
  }

  get inputPassword(){
    return $('#login-password-modal-login');
  }

  get buttonLogin(){
    return $('#login-submit-modal-login');
  }

  get messageIncorrectUserOrPassword(){
    return $('#error_message > p:nth-child(1) > strong');
  }

  get messageWelcome(){
    return $('//div[contains(@class,\'WelcomeMessage-header\')]');
  }

  loginWrong(user){
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.passwordWrong);
    this.buttonLogin.click();
    this.messageIncorrectUserOrPassword.waitForExist();
  }

  loginCorrect(user){
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonLogin.click();
    this.messageWelcome.waitForExist();
  }

}
module.exports = new LoginPage();
