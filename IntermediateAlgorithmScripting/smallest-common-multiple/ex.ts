// minimo múltipli comum, operação para encontrar o menor  número positivo,
// diferente de 0, que é múltiplo ao mesmo tempo de dois ou mais números.
// utilizado na soma ou na subtração de fração para encontrar um denominador comum.

function smallestCommons(arr: number[]): number {
  let numLimit = arr.reduce((a, c) => Math.max(a, c), 0);
  let rangeArr: number[] = [];

  let count = 0;
  let MMC = 0;

  do {
    count += 1;

    rangeArr.push(count);
  } while(rangeArr.length < numLimit);

  let condition = true;
  
  for (let i = 1; condition; i++ ) {

    if (rangeArr.every((n) => i % n === 0)) {
        MMC = i;
        condition = false;
    }
  }

  return MMC;
};

export default smallestCommons;