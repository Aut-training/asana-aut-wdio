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

  get columnInProgress(){
    return $('(//div[contains(@class,\'SortableList-itemContainer\')])[3]');
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

  moveTaskFromToDoToInProgress(){
    this.firstCard.dragAndDrop(this.columnInProgress);
  }

}
module.exports = new ProjectPage();
