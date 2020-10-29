const myRemove = require('./exerc2.js');

describe('myRemove', () => {
    test('return 3 out of array', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
  
    test('do not return complete array', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
  
    test('parameter array is the same', () => {
      expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  
    test('return expected array with number 5 added', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    
  });
  