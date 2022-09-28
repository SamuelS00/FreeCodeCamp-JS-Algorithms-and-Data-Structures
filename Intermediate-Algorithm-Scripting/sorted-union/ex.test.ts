import mocha from 'mocha';
import { expect } from 'chai';

import uniteUnique from './ex';

describe('test uniteUnique function', () => {
  it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.be.deep.equal([1, 3, 2, 5, 4]);
  });

  it('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).to.be.deep.equal([1, 2, 3, 5]);
  });

  it('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to.be.deep.equal([1, 2, 3, 5, 4, 6, 7, 8]);
  });

  it('uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6]', () => {
    expect(uniteUnique([1, 3, 2], [5, 4], [5, 6])).to.be.deep.equal([1, 3, 2, 5, 4, 6]);
  });

  it('uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]', () => {
    expect(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])).to.be.deep.equal([1, 3, 2, 5, 4]);
  })
});