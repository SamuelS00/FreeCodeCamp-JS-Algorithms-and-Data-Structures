import mocha from 'mocha'
import { expect } from 'chai';

import smallestCommons from './ex'

describe('test smallest commons function', () => {
  it('smallestCommons([1, 5]) should return a number.', () => {
    expect(typeof smallestCommons([1, 5])).to.be.equal('number');
  });

  it('smallestCommons([1, 5]) should return 60.', () => {
    expect(smallestCommons([1, 5])).to.be.equal(60);
  });

  it('smallestCommons([5, 1]) should return 60.', () => {
    expect(smallestCommons([5, 1])).to.be.equal(60);
  });

  it('smallestCommons([2, 10]) should return 2520.', () => {
    expect(smallestCommons([2, 10])).to.be.equal(2520);
  });

  it('smallestCommons([1, 13]) should return 360360.', () => {
    expect(smallestCommons([1, 13])).to.be.equal(360360);
  });
});