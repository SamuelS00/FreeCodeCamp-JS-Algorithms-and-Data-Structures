import mocha from 'mocha';
import { expect } from 'chai';

import orbitalPeriod from './ex'

describe('test orbialPeriod function', () => {
  it('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]', () => {
    expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) ).to.be.deep.equal([{name: "sputnik", orbitalPeriod: 86400}]);
  });

  it('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]', () => {
    expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).to.be.deep.equal([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
  });
});