export default function diffArray<T>(arr1: T[], arr2: T[]): T[] {
  let newArr: T[] = [];

  arr1.forEach((n1: T, i) => {
    if(!arr2.includes(n1)) newArr.push(n1);
  })

  arr2.forEach((n2: T, i) => {
    if(!arr1.includes(n2)) newArr.push(n2);
  })

  return newArr;
}