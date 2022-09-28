interface element {
  name: string
};

interface elementWithAvgAlt extends element {
  avgAlt: number,
};

interface elementWithOrbitalPeriod extends element {
  orbitalPeriod: number,
};

// T = 2π * √ (a^3 / μ);

function orbitalPeriod(elements: elementWithAvgAlt[]) {
  const GM = 398600.4418;  // standard gravitacional parameter - μ
  const EARTH_RADIUS = 6367.4447;
  const a = 2 * Math.PI; // orbital semi-major - 2π
  const newArr: elementWithOrbitalPeriod[] = [];

  const getOrbPeriod = function(element: elementWithAvgAlt): elementWithOrbitalPeriod {
    const c = Math.pow(EARTH_RADIUS + element.avgAlt, 3); // a^3
    const b = Math.sqrt(c / GM); //  √ (a^3 / μ)
    const orbPeriod = Math.round(a * b); // T 

    return {
      name: element.name,
      orbitalPeriod: orbPeriod
    };
  };

  for (let elem in elements) {
    let newElementWithOrbPeriod = getOrbPeriod(elements[elem]);
    newArr.push(newElementWithOrbPeriod);
  }

  return newArr;
}

export default orbitalPeriod;
