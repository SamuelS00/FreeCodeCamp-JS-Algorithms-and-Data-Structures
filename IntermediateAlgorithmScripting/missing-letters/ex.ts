function featNotLetter(str: string) {
  let currCharCode = str.charCodeAt(0); 
  let missing: undefined | string = undefined;

  str.split('').forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
       currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

export default featNotLetter