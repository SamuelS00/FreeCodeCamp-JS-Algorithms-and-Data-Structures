import mocha from 'mocha';
import { expect } from 'chai';

import myReplace from './ex';

describe('test myReplace function', () => {
  it('myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall', () => {
    expect(myReplace("Let us go to the store", "store", "mall")).to.be.equal("Let us go to the mall");
  });

  it('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch', () => {
    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).to.be.equal("He is Sitting on the couch");
  });

  it('myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there', () => {
    expect(myReplace("I think we should look up there", "up", "Down")).to.be.equal("I think we should look down there");
  });

  it('myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error', () => {
    expect(myReplace("This has a spellngi error", "spellngi", "spelling")).to.be.equal("This has a spelling error");
  });

  it('myReplace("His name is Tom", "Tom", "john") should return the string His name is John',() => {
    expect(myReplace("His name is Tom", "Tom", "john")).to.be.equal("His name is John");
  });

  it('myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms', () => {
    expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).to.be.equal("Let us get back to more Algorithms");
  });
});