const homePage = require('../pages/Home.page');
const systemMessages = require('../constants/SystemMessages.constant');
const assert = require('assert');

class HomeAssert {
  checkTitleOfWebBrowser(){
    assert.strictEqual(
      homePage.titleHomePage,
      systemMessages.FEEDBACK_TITLE_ASANA
    );
  }
}

module.exports = new HomeAssert();
