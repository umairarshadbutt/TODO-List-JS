
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE UPDATE TASK', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  describe('Testing html elements', () => {
    it('Getting the Model ID', () => {
      const modalTitle = document.getElementById('exampleModalCenter');
      expect(modalTitle).not.toBeNull();
    });
   
  });
});
