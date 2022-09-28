function binaryAgent(str: string) {
  const arrStr = str.split(' ');

  let newArr = arrStr.map((e) => String.fromCharCode(parseInt(e, 2)));

  return newArr.join('');
};

export default binaryAgent;