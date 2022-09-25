import mocha from 'mocha';
import { expect } from 'chai';

import truthCheck from './ex';

import {
  truthCheckResult1,
  truthCheckResult2,
  truthCheckResult3,
  truthCheckResult4,
  truthCheckResult5,
  truthCheckResult6,
  truthCheckResult7,
  truthCheckResult8,
  truthCheckResult9,
  truthCheckResult10
} from './results';

describe('test truthCheck function', () => {
  it('truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") should return false', () => {
    expect(truthCheckResult1).to.be.deep.equal(false);
  });

  it('truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name") should return true', () => {
    expect(truthCheckResult2).to.be.deep.equal(true);
  });

  it('truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role") should return false', () => {
    expect(truthCheckResult3).to.be.deep.equal(false);
  });

  it('truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number") should return true', () => {
    expect(truthCheckResult4).to.be.deep.equal(true);
  });

  it('truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught") should return false', () => {
    expect(truthCheckResult5).to.be.deep.equal(false);
  });

  it('truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number") should return false', () => {
    expect(truthCheckResult6).to.be.deep.equal(false);
  });

  it('truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username") should return false', () => {
    expect(truthCheckResult7).to.be.deep.equal(false);
  });

  it('truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users") should return true', () => {
    expect(truthCheckResult8).to.be.deep.equal(true);
  });

  it('truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data") should return true', () => {
    expect(truthCheckResult9).to.be.deep.equal(true);
  });

  it('truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id") should return false', () => {
    expect(truthCheckResult10).to.be.deep.equal(false);
  });
});