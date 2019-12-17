class HomePage {
  
  open(){
    browser.url('https://asana.com/es');
  }

  get titleHomePage(){
    return browser.getTitle();
  }
}

module.exports = new HomePage();
