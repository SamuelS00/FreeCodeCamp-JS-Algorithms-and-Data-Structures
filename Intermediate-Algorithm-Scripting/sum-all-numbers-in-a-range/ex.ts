export default function sumAll(arr: number[]): number {
  let numbersBetween: number[] = [];
  const arrAscendingOrder = arr.sort((a: number, b: number) => a - b);

  const firstNumber = arrAscendingOrder.slice(0)[0];
  const lastNumber = arrAscendingOrder.slice(-1)[0];

  for(let i = firstNumber; i <= lastNumber; i++) {
    numbersBetween.push(i);
  }
  
  const sumAll = numbersBetween.reduce((a: number, c): number => a + c, 0);
  return sumAll;
};