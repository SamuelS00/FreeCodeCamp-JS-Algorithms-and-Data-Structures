import mocha from 'mocha';
import { expect } from 'chai';

import pairElement from './ex';

describe.only('test DNA pairing', () => {
  it('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
    expect(pairElement("ATCGA")).to.be.deep.equal([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  });

  it('pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
    expect(pairElement("TTGAG")).to.be.deep.equal([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]])
  });

  it('pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
    expect(pairElement("CTCTA")).to.be.deep.equal([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]])
  })
});