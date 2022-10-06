// rotn: rot significa rotação e n é o número de rotações;

// gerar alphabeto dinicamente

function rot13(str: string) {
  const ALPHABET_LENGTH = 26;
  const ROT = 13;
  const CHARACTER_CODE_A = 65;

  const alphabet = [ ...Array(26)].map((_p, i) => String.fromCharCode(CHARACTER_CODE_A + i));
  const arrStr = str.split('');

  const decryptArrStr = arrStr.map((caracter) => {
    if (caracter.match(/[A-Z]/i)) {
      const indexLetter = alphabet.findIndex((letter) => letter === caracter);
      const rotatedLetter = indexLetter + ROT;

      return rotatedLetter >= ALPHABET_LENGTH 
        ? alphabet[rotatedLetter - ALPHABET_LENGTH]
        : alphabet[rotatedLetter];
    };

    return caracter;
  });

  const decryptStr = decryptArrStr.join('');

  return decryptStr;
}

export default rot13;