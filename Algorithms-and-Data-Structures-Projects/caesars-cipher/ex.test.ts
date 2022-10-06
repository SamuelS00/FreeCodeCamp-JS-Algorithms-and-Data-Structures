import mocha from 'mocha';
import { expect } from 'chai';

import rot13 from './ex';

describe('test rot13 function', () => {
  it('rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP', () => {
    expect(rot13("SERR PBQR PNZC")).to.be.equal('FREE CODE CAMP');
  });

  it('rot13("SERR CVMMN!") should decode to the string FREE PIZZA!', () => {
    expect(rot13("SERR CVMMN!")).to.be.equal('FREE PIZZA!');
  });

  it('rot13("SERR YBIR?") should decode to the string FREE LOVE?', () => {
    expect(rot13("SERR YBIR?")).to.be.equal('FREE LOVE?');
  });

  it('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).to.be.equal('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});