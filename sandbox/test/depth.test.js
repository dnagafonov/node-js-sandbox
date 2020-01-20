const assert = require(`chai`).assert;
const { depth } = require(`../codewars`);

describe('Basic tests', function() {

    it('returns the right depth when an object is passed in', function() {
      assert.equal(depth({}), 0);
      assert.equal(depth({a: 1}), 1);
      assert.equal(depth({a: 1, b: {c: 2}}), 2);
    });

    it('accounts for `null`', function() {
        assert.equal(depth(null), 0);
    });

    it('ignores arrays', function() {
        assert.equal(depth(['a', 'b', 'c']), 0);
        assert.equal(depth(['a', ['b', 'c']]), 0);
    });
    
  });