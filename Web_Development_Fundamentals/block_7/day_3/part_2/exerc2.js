const assert = require('assert');

const wordLengths = words => {
    const output = [];
    for (let i in words) {
        output.push(words[i].length);
    }
    return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);