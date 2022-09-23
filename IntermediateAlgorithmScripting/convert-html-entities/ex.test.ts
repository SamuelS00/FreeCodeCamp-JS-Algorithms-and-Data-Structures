import mocha from 'mocha';
import { expect } from 'chai';

import convertHTML from './ex';

describe('test convertHTML function', () => {
  it('convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.', () => {
    expect(convertHTML("Dolce & Gabbana")).to.be.equal('Dolce &amp; Gabbana');
  });

  it('convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos', () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).to.be.equal('Hamburgers &lt; Pizza &lt; Tacos');
  });
 
  it('convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve', () => {
    expect(convertHTML("Sixty > twelve")).to.be.equal('Sixty &gt; twelve');
  });

  it('Waiting:convertHTML(\'/Stuff in "quotation marks"\') should return the string Stuff in &quot;quotation marks&quot', () => {
    expect(convertHTML('Stuff in "quotation marks"')).to.be.equal('Stuff in &quot;quotation marks&quot;')
  });

  it('convertHTML("Schindler\'s List") should return the string Schindler&apos;s List', () => {
    expect(convertHTML("Schindler's List")).to.be.equal('Schindler&apos;s List')
  });

  it('convertHTML("<>") should return the string &lt;&gt;', () => {
    expect(convertHTML("<>")).to.be.equal('&lt;&gt;')
  });

  it('convertHTML("abc") should return the string abc', () => {
    expect(convertHTML("abc")).to.be.equal('abc')
  });
});