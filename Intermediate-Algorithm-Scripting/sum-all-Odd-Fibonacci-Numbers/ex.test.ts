import mocha from 'mocha';
import { expect } from 'chai';

import sumFibs from './ex';

describe('test sumFibs funtion', () => {
  it('sumFibs(1) should return a number', () => {
    expect(typeof sumFibs(1)).to.be.equal('number');
  });

  it('sumFibs(1000) should return 1785', () => {
    expect(sumFibs(1000)).to.be.equal(1785);
  });

  it('sumFibs(4000000) should return 4613732', () => {
    expect(sumFibs(4000000)).to.be.equal(4613732);
  });

  it('sumFibs(4) should return 5', () => {
    expect(sumFibs(4)).to.be.equal(5);
  });

  it('sumFibs(75024) should return 60696', () => {
    expect(sumFibs(75024)).to.be.equal(60696);
  });

  it('sumFibs(75025) should return 135721', () => {
    expect(sumFibs(75025)).to.be.equal(135721);
  });
});