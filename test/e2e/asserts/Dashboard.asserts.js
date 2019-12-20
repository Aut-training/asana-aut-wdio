const dashboardPage = require('../pages/Dashboard.page');
const systemMessages = require('../constants/SystemMessages.constant');
const assert = require('chai').assert;

class DashboardAssert {
  checkNameOfProjectCreated(){
    assert.strictEqual(
      dashboardPage.nameProjectCreated.getText(),
      systemMessages.PROJECT_NAME
    );
  }

}

module.exports = new DashboardAssert();
