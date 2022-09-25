function getValues<T, R extends keyof T>(obj: T, propertyName: R) {
  return obj[propertyName];
};
  
function truthCheck<T>(collection: T[], pre: string) {
  const isTrue = collection.every((obj) => getValues(obj, pre as keyof T));

  return isTrue;
};

export default truthCheck;