const myRemoveWithoutCopy = require('./exerc3.js');

describe('myRemoveWithoutCopy', () => {
    test('return 3 out of array', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
  
    test('do not return complete array', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
  
    test('parameter array has been modified', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    });
  
    test('return expected array without number 5 added', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    
  });
  