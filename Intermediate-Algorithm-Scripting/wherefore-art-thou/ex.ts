type propertyName = {
  apple?: number,
  bat?: number,
  cookie?: number,
  first?: string,
  last?: string,
  a?: string,
  b?: string,
  c?: string
}

function getValues<T, R extends keyof T>(obj: T, propertyName: R) {
  return obj[propertyName];
};

function whatIsInAName(collection: object[], source: object) {
  let newCollection: object[] = []
  const sourceKeys = Object.keys(source);

  newCollection = collection.filter((obj) => {
    return sourceKeys.every((key) => {

      let objKeyValue = getValues<propertyName, keyof propertyName>(obj, key as keyof propertyName);
      let sourceKeyValue = getValues<propertyName, keyof propertyName>(source, key as keyof propertyName);

      return obj.hasOwnProperty(key) && objKeyValue === sourceKeyValue
    });
  });

  return newCollection
}

export default whatIsInAName;