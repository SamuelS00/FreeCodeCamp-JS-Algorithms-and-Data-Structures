import mocha from 'mocha';
import { expect } from 'chai';
import whatIsInAName from './ex'
import {
  whatIsInANameResult1,
  whatIsInANameResult2,
  whatIsInANameResult3,
  whatIsInANameResult4
} from './results'

describe.only('test sum all numbers in a range function', () => {
  it('should return [{ first: "Tybalt", last: "Capulet" }]', () => {

    expect(whatIsInAName(whatIsInANameResult1, { "last": "Capulet" })
    ).to.be.deep.equal([{ first: "Tybalt", last: "Capulet" }]);
  });
  
  it('should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].', () => {

    expect(whatIsInAName(whatIsInANameResult2, { "apple": 1 })
    ).to.be.deep.equal([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]);
  });

  it('should return  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]', () => {

    expect(whatIsInAName(whatIsInANameResult3, { "apple": 1, "bat": 2 })
    ).to.be.deep.equal([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
  });

  it('should return  []', () => {

    expect(whatIsInAName(whatIsInANameResult4, {"a": 1, "b": 9999, "c": 3})
    ).to.be.deep.equal([]);
  });
});
