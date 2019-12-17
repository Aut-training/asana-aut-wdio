const homePage = require('../pages/Home.page');
const homeAssert = require('../asserts/Home.asserts');

describe('Asana Main Page', () => {
  before(() => {
    homePage.open();
  });

  it('should have the right title', () => {
    homeAssert.checkTitleOfWebBrowser();
  });
});
