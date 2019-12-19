const projectPage = require('../pages/Project.page');
const systemMessages = require('../constants/SystemMessages.constant');
const assert = require('chai').assert;

class ProjectAssert {
  checkNameOfProjectCreated(){
    assert.strictEqual(
      projectPage.nameProjectCreated.getText(),
      systemMessages.PROJECT_NAME
    );
  }

  checkNameOfCardInTheProjectCreated(){
    assert.strictEqual(
      projectPage.firstCard.getText(),
      systemMessages.NAME_TASK
    );
  }
}

module.exports = new ProjectAssert();
