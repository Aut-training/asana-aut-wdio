const assert = require('assert');

describe('Main page asana', () => {
  it('should have the right title', () => {
    browser.url('https://asana.com/es');
    const title = browser.getTitle();
    assert.strictEqual(title, 'Gestiona en línea el trabajo, los proyectos y las tareas de tu equipo · Asana');
  });
});  