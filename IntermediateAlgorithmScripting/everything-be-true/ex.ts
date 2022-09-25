function getValues<T, R extends keyof T>(obj: T, propertyName: R) {
  return obj[propertyName];
};
  
function truthCheck<T>(collection: T[], pre: string) {
  const isTrue = collection.every((obj) => {

    let objPreValue = getValues(obj, pre as keyof T)
    return objPreValue;
  });

  return isTrue;
};

export default truthCheck;