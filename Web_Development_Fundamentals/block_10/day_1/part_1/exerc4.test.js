const myFizzBuzz = require('./exerc4.js');

describe('myFizzBuzz', () => {
    test('divisible by 3 and 5', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
  
    test('divisible by 3', () => {
      expect(myFizzBuzz(3)).toBe('fizz');
    });
  
    test('divisible by 5', () => {
      expect(myFizzBuzz(5)).toBe('buzz');
    });
  
    test('not divisible by 3 and 5', () => {
      expect(myFizzBuzz(16)).toBe(16);
    });
    
    test('not a number as a parameter', () => {
      expect(myFizzBuzz('number')).toBeFalsy();
    });
      
  });
  