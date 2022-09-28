import mocha from 'mocha';
import { expect } from 'chai';

import {
  diffArrResult1,
  diffArrResult2,
  diffArrResult3,
  diffArrResult4 
} from './results';

describe('test diff two arrays function', () => {
  it('should return an array', () => {
    expect(Array.isArray(diffArrResult1)).to.be.equal(true);
  });

  it('should return ["pink wool" and array with one item]', () => {
    expect(diffArrResult2.length).to.be.equal(1);
    expect(diffArrResult2).to.be.deep.equal(["pink wool"]);
  });

  it('should return ["diorite", "pink wool"]', () => {
    expect(diffArrResult3).to.be.deep.equal(["pink wool", "diorite"]);
  })

  it('should return an empty array', () => {
    expect(diffArrResult4).to.be.deep.equal([])
  })
});
