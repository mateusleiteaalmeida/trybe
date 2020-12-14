    
const assert = require('assert');
const { get } = require('http');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((accumulator, currentValue) =>
    accumulator + currentValue.split('').reduce((accumulatorInside, currentValueInside) => {
      if (currentValueInside === 'a' || currentValueInside === 'A') return accumulatorInside + 1;
      return accumulatorInside;
    }, 0),
  0);
}

assert.deepEqual(containsA(), 20);