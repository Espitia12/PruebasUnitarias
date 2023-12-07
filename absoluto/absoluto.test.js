const valorAbsoluto = require('./absoluto');

test('Valor absoluto de un número', () => {
  expect(valorAbsoluto()).toBe(5);
});