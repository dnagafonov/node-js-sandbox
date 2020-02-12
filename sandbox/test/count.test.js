const chai = require(`chai`);
const { count } = require(`../codewars`);

describe(`Test count function`, () => {
    it(`aba`, () => {
        chai.expect(count(`aba`)).to.deep.equal({ a: 2, b: 1})
    });
});