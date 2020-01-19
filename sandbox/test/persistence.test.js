const chai = require(`chai`);
const assert = require(`chai`).assert;
const { persistence } = require(`../codewars`);

describe(`Test persistance function`, () => {
    it(`num = 39`, () => {
        chai.expect(persistence(39)).to.deep.equal(3);
    })

    it(`num = 4`, () => {
        assert.equal(persistence(4),0);
    })

    it(`num = 25`, () => {
        assert.equal(persistence(25),2);
    })
    
    it(`num = 999`, () => {
        assert.equal(persistence(999),4);
    })
})