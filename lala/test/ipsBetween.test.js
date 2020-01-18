const assert = require(`chai`).assert;
const { ipsBetween } = require(`../readFile`);

describe(`test ipsBetween`, () => {

    it(`equal 50`, () => {
        assert.equal(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
    });

    it(`equal 246`, () => {
        assert.equal(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
    });


    it(`equal 256`, () => {
        assert.equal(ipsBetween("10.0.0.0", "10.0.1.0"), 256);
    });

})