
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE UPDATE TASK', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  describe('Testing html elements', () => {
    it('Getting the Model ID', () => {
      const modelID = document.getElementById('exampleModalCenter');
      expect(modelID).not.toBeNull();
    });
    it('Task Title', () => {
      const taskTitle = document.getElementById('taskTitle');
      expect(taskTitle).not.toBeNull();
    });
    it('Task Description', () => {
      const taskDescription = document.getElementById('taskDescription');
      expect(taskDescription).not.toBeNull();
    });
    it('Task Date', () => {
      const taskDate = document.getElementById('taskDate');
      expect(taskDate).not.toBeNull();
    });
    it('Task Priority', () => {
      const taskPriority = document.getElementById('taskPriority');
      expect(taskPriority).not.toBeNull();
    });
  });
});
