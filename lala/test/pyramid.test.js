const { longestSlideDown } = require(`../readFile`);
const assert = require(`chai`).assert;
describe(`test function longestSlideDown`, function () {

it(`little pyramid`, () => {
    assert.equal(longestSlideDown([[3],
        [7, 4],
        [2, 4, 6],
        [8, 5, 9, 3]]), 23);
})

});
