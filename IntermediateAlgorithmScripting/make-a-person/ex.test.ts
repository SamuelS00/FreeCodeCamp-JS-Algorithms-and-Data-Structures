import mocha from 'mocha';
import { expect } from 'chai';

import Person from './ex';

describe('test Person class', () => {
  const bob = new Person('Bob Ross');
  it('bob instanceof Person should return true', () => {
    expect(bob).to.be.an.instanceOf(Person);
  });

  it('bob.getFirstName() should return the string Bob', () => {
    expect(bob.getFirstName()).to.be.eq('Bob');
  });

  it('bob.getLastName() should return the string Ross', () => {
    expect(bob.getLastName()).to.be.eq('Ross');
  });

  it('bob.getFullName() should return the string Bob Ross', () => {
    expect(bob.getFullName()).to.be.eq('Bob Ross');
  });

  it('bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell")', () => {
    bob.setFirstName('Haskell');
    expect(bob.getFullName()).to.be.eq('Haskell Ross');
  });

  it('bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry")', () => {
    bob.setLastName('Curry');
    expect(bob.getFullName()).to.be.eq('Haskell Curry');
  });

  it('bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    expect(bob.getFullName()).to.be.eq('Haskell Curry');
  });
});