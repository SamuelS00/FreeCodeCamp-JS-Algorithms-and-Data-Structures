
function uniteUnique<T>(...arr: T[])  {
  let newArr: T[] = [];

  arr.forEach((subArr) => {
    newArr = [...new Set(newArr.concat(subArr))];
  });

  return newArr;
}

export default uniteUnique;