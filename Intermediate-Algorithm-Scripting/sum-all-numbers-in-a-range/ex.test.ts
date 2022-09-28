import mocha from 'mocha';
import { expect } from 'chai';
import sumAll from './ex';

describe('test sum all numbers in a range function', () => {
  it('should return 45', () => {
    expect(sumAll([5, 10])).to.be.equal(45);
  });
  
  it('should return 10', () => {
    expect(sumAll([4, 1])).to.be.equal(10);
  });

  it('should return 45', () => {
    expect(sumAll([10, 5])).to.be.equal(45);
  });
});
