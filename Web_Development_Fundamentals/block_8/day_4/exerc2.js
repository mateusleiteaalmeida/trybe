const assert = require('assert')

const sum = (...numbers) => {
    let result = 0;
    for (i = 0; i < numbers.length; i += 1) {
        result += numbers[i]
    }
    return result
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)