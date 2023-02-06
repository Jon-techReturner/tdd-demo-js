const sum = require('./sum');

test('adds 7 + 3 to equal 10', () => {
  expect(sum(7, 3)).toBe(10);
});