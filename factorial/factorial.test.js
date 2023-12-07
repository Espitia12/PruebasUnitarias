const factorial = require('./factorial');

test('Factorial de un número', () => {
  expect(factorial(5)).toBe(120);
});
