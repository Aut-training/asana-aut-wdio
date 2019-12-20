class ProjectPage {
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

  get templateNewProject(){
    return $('div[title=\'Proyecto en blanco\']');
  }

  get typeNewProject(){
    return $('(//div[contains(@class,\'ProjectLayoutSelector-layoutOptionLabel\')])[2]');
  }

  get inputProjectName(){
    return $('#new_project_dialog_content_name_input');
  }

  get buttonSaveProject(){
    return $('//div[contains(@class,\'submitButton\')]');
  }

  get nameProjectCreated(){
    return $('//h1[contains(@class,\'Typography--truncate TopbarPageHeaderStructure-title\')]');
  }

  get firstCard(){
    return $('(//div[contains(@class,\'BoardCard\')])[1]');
  }

  get linkNewColumn(){
    return $('//a[contains(@class,\'BoardNewColumn-addColumnLink\')]');
  }

  get addNewTask(){
    return $('(//a[contains(@class,\'CardButton\')])[4]');
  }

  get titleNewColumnForAssertion(){
    return $('(//span[contains(@class,\'BoardColumnHeaderTitle\')])[4]');
  }

  get titleNewCardForAssertion(){
    return $('(//div[contains(@class,\'BoardCard-name\')])[4]');
  }

  get textAreaNewCardTitle(){
    return $('//textarea[contains(@class,\'simpleTextarea\')]');
  }

  get textForNewColumn(){
    return $('//input[contains(@class,\'BoardNewColumnForm-input\')]');
  }

  get buttonMenuProject(){
    return $('//a[contains(@class,\'PageHeaderDropdownMenuButton\')]');
  }

  get buttonMenuDeleteProject(){
    return $('(//span[contains(@class,\'MenuItem-label\')])[10]');
  }

  get buttonDeleteProjectConfirmation(){
    return $('.DeletePotDialog-confirmText');
  }

  get messageOfConfirmationTheProjectWasDeleted(){
    return $('//div[contains(@class,\'ToastNotificationContent-text\')]');
  }

  delete(){
    this.buttonMenuProject.click();
    this.buttonMenuDeleteProject.waitForExist(3000);
    this.buttonMenuDeleteProject.click();
    this.buttonDeleteProjectConfirmation.waitForExist(3000);
    browser.pause(3000);
    this.buttonDeleteProjectConfirmation.click();
    browser.pause(3000);
    this.messageOfConfirmationTheProjectWasDeleted.waitForExist(3000);
  }

  createTaskInProject(user){
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonLogin.click();
    this.linkNewProject.click();
    this.templateNewProject.click();
    this.inputProjectName.setValue(user.projectName);
    this.typeNewProject.click();
    this.buttonSaveProject.click();
  }

  createColumnAndTaskInProject(user){
    this.inputEmail.setValue(user.login);
    this.inputPassword.setValue(user.password);
    this.buttonLogin.click();
    this.linkNewProject.click();
    this.templateNewProject.click();
    this.inputProjectName.setValue(user.projectName);
    this.typeNewProject.click();
    this.buttonSaveProject.click();
    this.linkNewColumn.click();
    browser.pause(3000);
    this.textForNewColumn.setValue(user.list);
    browser.pause(3000);
    this.buttonMenuProject.click();
    this.addNewTask.click();
    browser.pause(3000);
    this.textAreaNewCardTitle.setValue(user.task);
    browser.pause(3000);
    this.buttonMenuProject.click();
  }

}
module.exports = new ProjectPage();
