import mocha from 'mocha';
import { expect } from 'chai';

import convertToRoman from './ex';

describe('test convertToRoman function', () => {
  it('convertToRoman(2) should return the string II', () => {
    expect(convertToRoman(2)).to.be.equal('II');
  });

  it('convertToRoman(3) should return the string III', () => {
    expect(convertToRoman(3)).to.be.equal('III');
  });

  it('convertToRoman(4) should return the string IV', () => {
    expect(convertToRoman(4)).to.be.equal('IV');
  });

  it('convertToRoman(5) should return the string V', () => {
    expect(convertToRoman(5)).to.be.equal('V');
  });

  it('convertToRoman(9) should return the string IX', () => {
    expect(convertToRoman(9)).to.be.equal('IX');
  });

  it('convertToRoman(12) should return the string XII', () => {
    expect(convertToRoman(12)).to.be.equal('XII');
  });
  
  it('convertToRoman(16) should return the string XVI', () => {
    expect(convertToRoman(16)).to.be.equal('XVI');
  });

  it('convertToRoman(29) should return the string XXIX', () => {
    expect(convertToRoman(29)).to.be.equal('XXIX');
  });

  it('convertToRoman(44) should return the string XLIV', () => {
    expect(convertToRoman(44)).to.be.equal('XLIV');
  });

  it('convertToRoman(45) should return the string XLV', () => {
    expect(convertToRoman(45)).to.be.equal('XLV');
  });

  it('convertToRoman(68) should return the string LXVIII', () => {
    expect(convertToRoman(68)).to.be.equal('LXVIII');
  });

  it('convertToRoman(83) should return the string LXXXIII', () => {
    expect(convertToRoman(83)).to.be.equal('LXXXIII');
  });

  it('convertToRoman(97) should return the string XCVII', () => {
    expect(convertToRoman(97)).to.be.equal('XCVII');
  });

  it('convertToRoman(99) should return the string XCIX', () => {
    expect(convertToRoman(99)).to.be.equal('XCIX');
  });

  it('convertToRoman(400) should return the string CD', () => {
    expect(convertToRoman(400)).to.be.equal('CD');
  });

  it('convertToRoman(500) should return the string D', () => {
    expect(convertToRoman(500)).to.be.equal('D');
  });

  it('convertToRoman(501) should return the string DI', () => {
    expect(convertToRoman(501)).to.be.equal('DI');
  });

  it('convertToRoman(649) should return the string DCXLIX', () => {
    expect(convertToRoman(649)).to.be.equal('DCXLIX');
  });

  it('convertToRoman(798) should return the string DCCXCVIII', () => {
    expect(convertToRoman(798)).to.be.equal('DCCXCVIII');
  });

  it('convertToRoman(891) should return the string DCCCXCI', () => {
    expect(convertToRoman(891)).to.be.equal('DCCCXCI');
  });

  it('convertToRoman(1000) should return the string M', () => {
    expect(convertToRoman(1000)).to.be.equal('M');
  });

  it('convertToRoman(1004) should return the string MIV', () => {
    expect(convertToRoman(1004)).to.be.equal('MIV');
  });

  it('convertToRoman(1006) should return the string MVI', () => {
    expect(convertToRoman(1006)).to.be.equal('MVI');
  });

  it('convertToRoman(1023) should return the string MXXIII', () => {
    expect(convertToRoman(1023)).to.be.equal('MXXIII');
  });

  it('convertToRoman(2014) should return the string MMXIV', () => {
    expect(convertToRoman(2014)).to.be.equal('MMXIV');
  });

  it('convertToRoman(3999) should return the string MMMCMXCIX', () => {
    expect(convertToRoman(3999)).to.be.equal('MMMCMXCIX');
  });
});