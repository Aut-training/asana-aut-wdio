class DashboardPage {
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

  get linkNewProject(){
    return $('//a[contains(@class,\'SidebarTeamDetailsProjectsList-emptyTeamCreateProjectLink\')]');
  }

  get typeNewProject(){
    return $('div[title=\'Proyecto en blanco\']');
  }

  get inputProjectName(){
    return $('#new_project_dialog_content_name_input');
  }

  get buttonSaveProject(){
    return $('//div[contains(@class,\'submitButton\')]');
  }

  get nameProjectCreated(){
    return $('//h1[contains(@class,\'TopbarPageHeaderStructure-title\')]');
  }

  createProject(user){
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonLogin.click();
    this.linkNewProject.click();
    this.typeNewProject.click();
    this.inputProjectName.setValue(user.projectName);
    this.buttonSaveProject.click();
    this.nameProjectCreated.waitForExist();
  }

}
module.exports = new DashboardPage();
