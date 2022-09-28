import mocha from 'mocha';
import { expect } from 'chai';

import steamrollArray from './ex';

describe('test for stemrollArray', () => {
  it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', () => {
    expect(steamrollArray([[["a"]], [["b"]]])).to.be.deep.equal(["a", "b"]);
  });

  it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).to.be.deep.equal([1, 2, 3, 4]);
  });

  it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]', () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).to.be.deep.equal([1, 3, 4]);
  });

  it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).to.be.deep.equal([1, {}, 3, 4]);
  });
});