import mocha from 'mocha';
import { expect } from 'chai';

import { 
  seekAndDestroyResult1,
  seekAndDestroyResult2,
  seekAndDestroyResult3,
  seekAndDestroyResult4,
  seekAndDestroyResult5,
  seekAndDestroyResult6
} from './results';

describe('test seek and destroy function', () => {
  it('should return [1, 1]', () => {
    expect(seekAndDestroyResult1).to.be.deep.equal([1, 1]);
  });

  it('should return [1, 5, 1]', () => {
    expect(seekAndDestroyResult2).to.be.deep.equal([1, 5, 1]);
  });

  it('should return [1]', () => {
    expect(seekAndDestroyResult3).to.be.deep.equal([1]);
  });

  it('should return []', () => {
    expect(seekAndDestroyResult4).to.be.deep.equal([]);
  });

  it('should return ["hamburger"]', () => {
    expect(seekAndDestroyResult5).to.be.deep.equal(['hamburger']);
  });

  it('should return [12,92,65]', () => {
    expect(seekAndDestroyResult6).to.be.deep.equal([12, 92, 65]);
  });
});