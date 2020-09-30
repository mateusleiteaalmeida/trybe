const assert = require('assert');

const addAllnumbers = numbers => {
    let output = 0
    for (let i in numbers) {
        output += numbers[i];
    }
    return output;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);