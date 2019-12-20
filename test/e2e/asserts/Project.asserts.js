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
      systemMessages.NAME_TASK_DEFAULT
    );
  }

  checkNameOfNewCardCreated(){
    assert.strictEqual(
      projectPage.titleNewCardForAssertion.getText(),
      systemMessages.NAME_NEW_TASK
    );
  }

  checkNameOfNewColumn(){
    assert.strictEqual(
      projectPage.titleNewColumnForAssertion.getText(),
      systemMessages.NAME_NEW_COLUMN
    );
  }
}

module.exports = new ProjectAssert();
