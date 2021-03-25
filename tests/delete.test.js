const delete1 = require('../src/delete');

test('Task delete function', () => {
  expect(delete1(0)).toBe(1);
});