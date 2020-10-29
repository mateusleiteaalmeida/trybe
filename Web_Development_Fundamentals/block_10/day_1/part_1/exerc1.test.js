const sum = require('./exerc1.js');

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('4 plus "5" throw error', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  test('4 plus 5 throw message error', () => {
    expect(() => {
      sum(4, "5")
    }).toThrow(/parameters must be numbers/);
  });
  
});
