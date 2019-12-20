const projectPage = require('../pages/Project.page');
const projectAssert = require('../asserts/Project.asserts');
const context = require('../../data/Context');

describe('Creation of a new project with a card', () => {
  beforeEach(() => {
    projectPage.open();
  }); 

  it('should be create a new project with the name Project Test and card with name Tarea 1', () => {
    projectPage.createTaskInProject(context.user);
    projectAssert.checkNameOfProjectCreated();
    projectAssert.checkNameOfCardInTheProjectCreated();
    projectPage.delete();
  });

  it('should be create a new column with name For Testing and inside one card with name New Task', () => {
    projectPage.createColumnAndTaskInProject(context.user);
    projectAssert.checkNameOfNewColumn();
    projectAssert.checkNameOfNewCardCreated();
  });

});
