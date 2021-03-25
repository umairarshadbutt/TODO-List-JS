const taskStatus = require('../src/home');

test('Statuse is Done', () => {
  expect(taskStatus(1)).toBe(1);
});

test('Statuse is UnDo', () => {
  expect(taskStatus(0)).toBe(0);
});
