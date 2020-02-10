const { sumDigPow } = require(`../codewars`);
const assert = require(`mocha`).assert;

// describe("sumDigPow Tests", function() {
//     assert.equal(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
//     assert.equal(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
//     assert.equal(sumDigPow(10, 100),  [89])
//     assert.equal(sumDigPow(90, 100), [])
//     assert.equal(sumDigPow(90, 150), [135])
//     assert.equal(sumDigPow(50, 150), [89, 135])
//     assert.equal(sumDigPow(10, 150), [89, 135])
//   });