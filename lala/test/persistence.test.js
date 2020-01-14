const assert = require(`chai`).assert;
const { persistence } = require(`../readFile`);

describe(`Test persistance function`, () => {
    it(`num = 39`, () => {
        assert.equal(persistence(39), 3);
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