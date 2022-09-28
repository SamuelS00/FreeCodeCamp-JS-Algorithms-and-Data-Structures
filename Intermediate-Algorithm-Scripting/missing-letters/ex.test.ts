import mocha from 'mocha';
import { expect } from 'chai';

import featNoLetter from './ex';

describe('test feat no letter functions', () => {
  it('fearNotLetter("abce") should return the string d', () => {
    expect(featNoLetter('abce')).to.be.equal('d')
  });

  it('fearNotLetter("abcdefghjklmno") should return the string i', () => {
    expect(featNoLetter('ababcdefghjklmnocd')).to.be.equal('i')
  });

  it('fearNotLetter("stvwx") should return the string u', () => {
    expect(featNoLetter('stvwx')).to.be.equal('u')
  });

  it('fearNotLetter("bcdf") should return the string e', () => {
    expect(featNoLetter('bcdf')).to.be.equal('e')
  });

  it('fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined', () => {
    expect(featNoLetter('abcdefghijklmnopqrstuvwxyz')).to.be.equal(undefined)
  });
});

