import mocha from 'mocha';
import { expect } from 'chai';
import spinalCase from './ex';

describe.only('test spinal tab case function', () => {
  it('should return "this-is-spinal-tap"', () => {
    expect(spinalCase("This Is Spinal Tap")).to.be.equal("this-is-spinal-tap");
  });

  it('should return "this-is-spinal-tap"', () => {
    expect(spinalCase("thisIsSpinalTap")).to.be.equal("this-is-spinal-tap");
  });

  it('should return "the-andy-griffith-show"', () => {
    expect(spinalCase("The_Andy_Griffith_Show")).to.be.equal("the-andy-griffith-show");
  });

  it('should return "teletubbies-say-eh-oh"', () => {
    expect(spinalCase("Teletubbies say Eh-oh")).to.be.equal("teletubbies-say-eh-oh");
  });

  it('should return "all-the-small-things', () => {
    expect(spinalCase("AllThe-small Things")).to.be.equal("all-the-small-things");
  });
});