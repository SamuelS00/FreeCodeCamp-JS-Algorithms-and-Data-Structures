import mocha from 'mocha';
import { expect } from 'chai';

import telephoneCheck from './ex';

describe('test telephoneCheck function', () => {
  it('telephoneCheck("555-555-5555") should return a boolean', () => {
    expect(typeof telephoneCheck("555-555-5555")).to.be.equal('boolean');
  });

  it('telephoneCheck("1 555-555-5555") should return true', () => {
    expect(telephoneCheck("1 555-555-5555")).to.be.equal(true);
  });

  it('telephoneCheck("1 (555) 555-5555") should return true', () => {
    expect(telephoneCheck("1 (555) 555-5555")).to.be.equal(true);
  });

  it('telephoneCheck("5555555555") should return true', () => {
    expect(telephoneCheck("5555555555")).to.be.equal(true);
  });

  it('telephoneCheck("555-555-5555") should return true', () => {
    expect(telephoneCheck("555-555-5555")).to.be.equal(true);
  });

  it('telephoneCheck("(555)555-5555") should return true', () => {
    expect(telephoneCheck("(555)555-5555")).to.be.equal(true);
  });

  it('telephoneCheck("1(555)555-5555") should return true', () => {
    expect(telephoneCheck("1(555)555-5555")).to.be.equal(true);
  });

  it('telephoneCheck("555-5555") should return false', () => {
    expect(telephoneCheck("555-5555")).to.be.equal(false);
  });

  it('telephoneCheck("5555555") should return false', () => {
    expect(telephoneCheck("5555555")).to.be.equal(false);
  });

  it('telephoneCheck("1 555)555-5555") should return false', () => {
    expect(telephoneCheck("1 555)555-5555")).to.be.equal(false);
  });

  it('telephoneCheck("1 555 555 5555") should return true', () => {
    expect(telephoneCheck("1 555 555 5555")).to.be.equal(true);
  });

  it('telephoneCheck("1 456 789 4444") should return true', () => {
    expect(telephoneCheck("1 456 789 4444")).to.be.equal(true);
  });

  it('telephoneCheck("123**&!!asdf#") should return false', () => {
    expect(telephoneCheck("123**&!!asdf#")).to.be.equal(false);
  });


  it('telephoneCheck("55555555") should return false', () => {
    expect(telephoneCheck("55555555")).to.be.equal(false);
  });

  it('telephoneCheck("(6054756961)") should return false', () => {
    expect(telephoneCheck("(6054756961)")).to.be.equal(false);
  });

  it('telephoneCheck("2 (757) 622-7382") should return false', () => {
    expect(telephoneCheck("2 (757) 622-7382")).to.be.equal(false);
  });

  it('telephoneCheck("0 (757) 622-7382") should return false', () => {
    expect(telephoneCheck("0 (757) 622-7382")).to.be.equal(false);
  });

  it('telephoneCheck("-1 (757) 622-7382") should return false', () => {
    expect(telephoneCheck("-1 (757) 622-7382")).to.be.equal(false);
  });

  it('telephoneCheck("2 757 622-7382") should return false', () => {
    expect(telephoneCheck("2 757 622-7382")).to.be.equal(false);
  });

  it('telephoneCheck("10 (757) 622-7382") should return false', () => {
    expect(telephoneCheck("10 (757) 622-7382")).to.be.equal(false);
  });

  it('telephoneCheck("27576227382") should return false', () => {
    expect(telephoneCheck("27576227382")).to.be.equal(false);
  });

  it('telephoneCheck("(275)76227382") should return false', () => {
    expect(telephoneCheck("(275)76227382")).to.be.equal(false);
  });

  it('telephoneCheck("2(757)6227382") should return false', () => {
    expect(telephoneCheck("2(757)6227382")).to.be.equal(false);
  });

  it('telephoneCheck("2(757)622-7382") should return false', () => {
    expect(telephoneCheck("2(757)622-7382")).to.be.equal(false);
  });

  it('telephoneCheck("555)-555-5555") should return false', () => {
    expect(telephoneCheck("555)-555-5555")).to.be.equal(false);
  });

  it('telephoneCheck("(555-555-5555") should return false', () => {
    expect(telephoneCheck("(555-555-5555")).to.be.equal(false);
  });

  it('telephoneCheck("(555)5(55?)-5555") should return false', () => {
    expect(telephoneCheck("(555)5(55?)-5555")).to.be.equal(false);
  });

  it('telephoneCheck("55 55-55-555-5") should return false', () => {
    expect(telephoneCheck("55 55-55-555-5")).to.be.equal(false);
  });

  it('telephoneCheck("11 555-555-5555") should return false', () => {
    expect(telephoneCheck("11 555-555-5555")).to.be.equal(false);
  });
});