export default function destroyer<T>(arr: T[], ...args: T[]): T[]  {
  let newArr: T[] = [];
  
  arr.forEach((e) => {
    if (!args.includes(e)) newArr.push(e);
  });

  return newArr;
}
