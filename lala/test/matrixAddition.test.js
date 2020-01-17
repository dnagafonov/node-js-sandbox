const chai = require(`chai`);
const {matrixAddition} = require(`../readFile`);

describe(`test matrixAddition`, () => {
  it(`first`, () => {
    chai.expect(matrixAddition(
        [[1, 2],
          [1, 2]],
        //    +
        [[2, 3],
          [2, 3]]
    )).to.deep.equal([
      [3, 5],
      [3, 5]]);
  });
});
