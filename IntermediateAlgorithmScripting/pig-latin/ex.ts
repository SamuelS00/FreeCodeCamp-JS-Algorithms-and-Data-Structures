function translatePigLatin(str: string) {
  // transform string into an array where each letter occupies a position;
  const arrStr = str.split('');
  
  // get the first position of arrStr that represents the first letter;
  const firstLetter: string = arrStr[0];
   
  // get the index of the first occurrence of vowel;
  const indexNextVowel = arrStr.findIndex((l) => l.match(/[aeiou]/i));

  // slice the string to get all the letters after the vowel.
  const firstLettersBeforeVowel = arrStr.slice(indexNextVowel).join('');

  // slice the string to get all the letters before the vowel.
  const lastLettersAfterVowel =  arrStr.slice(0, indexNextVowel).join('');

  // check if the string has vowels if not, return the string concatenated with "ay";
  if (arrStr.every((l) => l.match(/[^aeiuo]/i))) {
    return arrStr.join('').concat('ay');
  }
  
  // check if the first letter is a consonant, if it is return the string concatenated with "way"
  if (firstLetter.match(/[aeiou]/i)) {
    return arrStr.join('').concat('way');
  }
  
  // if it doesn't pass the above checks it's likely to be a string with vowels in the middle of the word
  return firstLettersBeforeVowel.concat(lastLettersAfterVowel + 'ay');
}

export default translatePigLatin;