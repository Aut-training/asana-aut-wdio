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

}

module.exports = new ProjectAssert();
