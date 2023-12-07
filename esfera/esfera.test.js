let esfera = require("./esfera");

test('Volumen de una esfera', () => {
  expect(esfera(5)).toBeCloseTo(523.60, 2);
  expect(esfera(2)).toBeCloseTo(33.51, 2);
  expect(esfera(8)).toBeCloseTo(2144.66, 2);
});