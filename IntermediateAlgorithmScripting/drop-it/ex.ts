function dropElements(arr: number[], func: Function) {
  let newArr: number[] = [];

  arr.forEach((n) => {
    if(func(n)) { 
      const index = arr.indexOf(n);
      newArr = arr.splice(index);
    };
  })
  
  return newArr;
};

export default dropElements;