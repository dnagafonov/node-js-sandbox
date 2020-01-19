const assert = require(`chai`).assert;
const { multiplies3and5 } = require(`../codewars`);

describe(`Test multiplisr1and5`, () => {
    
    it(`below 10`, () => {
        assert.equal(multiplies3and5(10), 23);
    })

})