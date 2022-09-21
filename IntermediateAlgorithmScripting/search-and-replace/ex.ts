function myReplace(str: string, before: string, after: string) {
  let newSentence: string;
  const arrSentence = str.split(' ');
  const wordIndex = arrSentence.findIndex(e => e === before);

  if(arrSentence[wordIndex][0] === arrSentence[wordIndex][0].toUpperCase()) {
    arrSentence[wordIndex] = (after[0].toUpperCase() + after.substring(1));
  } else {
    arrSentence[wordIndex] = (after[0].toLowerCase() + after.substring(1));
  }

  newSentence = arrSentence.join(' ');
  return newSentence;
};

export default myReplace;

