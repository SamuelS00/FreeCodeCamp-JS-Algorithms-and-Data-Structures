import mocha from 'mocha';
import { expect } from 'chai';

import sumPrimes from './ex'

describe.only('test sumPrime function', () => {
  it('sumPrimes(10) should return a number', () => {
    expect(typeof sumPrimes(10)).to.be.equal('number');
  });

  it('sumPrimes(10) should return 17', () => {
    expect(sumPrimes(10)).to.be.equal(17);
  });

  it('sumPrimes(977) should return 73156', () => {
    expect(sumPrimes(977)).to.be.equal(73156);
  });
});