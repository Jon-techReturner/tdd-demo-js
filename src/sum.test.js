const sum = require('./sum');

test('adds 7 + 3 to equal 10', () => {
  expect(sum(7, 3)).toBe(10);
  expect(sum(5, 5)).toBe(10);
});
test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});
test('adds 30 + 5 to equal 35', () => {
  expect(sum(30, 5)).toBe(35);
});