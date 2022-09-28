import mocha from 'mocha';
import { expect } from 'chai';

import translatePigLatin from './ex';

describe('test translate pig latin function', () => {
    it('should return "aliforniacay"', () => {
      expect(translatePigLatin("california")).to.be.equal("aliforniacay");
    });
  
    it('should return "aragraphspay"', () => {
      expect(translatePigLatin("paragraphs")).to.be.equal("aragraphspay");
    });
  
    it('should return "oveglay"', () => {
      expect(translatePigLatin("glove")).to.be.equal("oveglay");
    });
  
    it('should return "algorithmway"', () => {
      expect(translatePigLatin("algorithm")).to.be.equal("algorithmway");
    });
  
    it('should return "eightway', () => {
      expect(translatePigLatin("eight")).to.be.equal("eightway");
    });

    it('Should handle words where the first vowel comes in the middle of the word. "artzschway"', () => {
        expect(translatePigLatin("schwartz")).to.be.equal("artzschway");
    });

    it('Should handle words without vowels.', () => {
        expect(translatePigLatin("rhythm")).to.be.equal("rhythmay");
    });
});