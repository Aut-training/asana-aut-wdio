class LoginPage {
  open() {
    browser.url('https://asana.com/es');
  }

  get buttonLogin() {
    return $('//a[contains(@class,\'sign-in\')]');
  }

  get inputEmail() {
    return $('#login-email-modal-login');
  }

  get inputPassword() {
    return $('#login-password-modal-login');
  }

  get buttonSignIn() {
    return $('#login-submit-modal-login');
  }

  get welcomeMessage() {
    return $('//div[contains(@class,\'WelcomeMessage-header\')]');
  }

  login(user) {
    this.buttonLogin.click();
    this.inputEmail.waitForEnabled();
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonSignIn.click();
  } 
}

export const loginPage = new LoginPage();
