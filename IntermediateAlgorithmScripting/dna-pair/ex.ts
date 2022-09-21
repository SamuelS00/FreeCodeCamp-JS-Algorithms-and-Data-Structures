function pairElement(str: string) {
  const pairs = [['A', 'T'], ['T','A'], ['G', 'C'], ['C','G']];
  const strArr = str.split('');

  const pairsArr = strArr.map((l) => pairs.find((p) => p[0] === l));
  return pairsArr;
}

export default pairElement;