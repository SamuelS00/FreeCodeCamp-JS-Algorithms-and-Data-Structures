function palindrome(str: string): boolean {
  const strLowerCase = str.toLowerCase();
  const strWithoutPunctuation = strLowerCase.match(/[a-z0-9]/g);

  if (strWithoutPunctuation === null) return false;
  
  let strJoin = strWithoutPunctuation.join('');
  let strJoinReverse = strWithoutPunctuation.reverse().join('');
  
  if (strJoin === strJoinReverse) return true;
  
  return false;
};

export default palindrome;
  