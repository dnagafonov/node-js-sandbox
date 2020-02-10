const assert = require(`chai`).assert;
const chai = require(`chai`);
const cake = require(`../codewars`).cake;

describe(`Test cake task`, () => {
    it(`900, abcdef`,() => {
        chai.expect(cake(900, `abcdef`)).to.eq(`That was close!`);
    });
    it(`56, ifkhchlhfd`, () => {
        assert.equal(cake(56, `ifkhchlhfd`), `Fire!`)
    });
    it(`256, aaaaaddddr`, () => {
        assert.equal(cake(256, `aaaaaddddr`), `Fire!`)
    });
})