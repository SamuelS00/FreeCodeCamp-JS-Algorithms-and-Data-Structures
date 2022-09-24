function sumFibs(num: number) {
  let arrFibonnaci = [1, 1];
  let sumAll: number = 0;

  do {
    let sum = arrFibonnaci[arrFibonnaci.length - 2] +  arrFibonnaci[arrFibonnaci.length - 1];

    arrFibonnaci.push(sum);
  } while (!arrFibonnaci.some((n) => n >= num));

  if(arrFibonnaci[arrFibonnaci.length - 1] > num) arrFibonnaci.splice(-1);

  sumAll = arrFibonnaci.reduce((a: number, c: number) => {
    if (!(c % 2 === 0)) return a + c;

    return a;
  }, 0);

  return sumAll;
};

export default sumFibs