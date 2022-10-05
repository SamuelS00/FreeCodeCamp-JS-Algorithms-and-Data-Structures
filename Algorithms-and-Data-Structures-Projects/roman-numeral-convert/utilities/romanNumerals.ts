import { SchemaRomanValue, SchemaDecomposedNumber } from '../interfaces';

const romanNumeralsUnit: SchemaRomanValue[] = [
  { letter: ['I', 'X'], value: 9, zeros: 0 },
  { letter: ['V', 'I','I','I'], value: 8, zeros: 0 },
  { letter: ['V', 'I', 'I'], value: 7, zeros: 0 },
  { letter: ['V', 'I'], value: 6, zeros: 0 },
  { letter: ['V'], value: 5, zeros: 0 },
  { letter: ['I', 'V'], value: 4, zeros: 0  },
  { letter: ['I', 'I', 'I'], value: 3, zeros: 0  },
  { letter: ['I', 'I'], value: 2, zeros: 0 },
  { letter: ['I'], value: 1, zeros: 0 }
];
  
const romanNumeralsTen: SchemaRomanValue[] = [
  { letter: ['X', 'C'], value: 90, zeros: 1 },
  { letter: ['L', 'X','X','X'], value: 80, zeros: 1 },
  { letter: ['L', 'X', 'X'], value: 70, zeros: 1 },
  { letter: ['L', 'X'], value: 60, zeros: 1 },
  { letter: ['L'], value: 50, zeros: 1 },
  { letter: ['X', 'L'], value: 40, zeros: 1  },
  { letter: ['X', 'X', 'X'], value: 30, zeros: 1  },
  { letter: ['X', 'X'], value: 20, zeros: 1 },
  { letter: ['X'], value: 10, zeros: 1 }
];
  
const romanNumeralsHundred: SchemaRomanValue[] = [
  { letter: ['C', 'M'], value: 900, zeros: 2 },
  { letter: ['D', 'C','C','C'], value: 800, zeros: 2 },
  { letter: ['D', 'C', 'C'], value: 700, zeros: 2 },
  { letter: ['D', 'C'], value: 600, zeros: 2 },
  { letter: ['D'], value: 500, zeros: 2 },
  { letter: ['C', 'D'], value: 400, zeros: 2  },
  { letter: ['C', 'C', 'C'], value: 300, zeros: 2  },
  { letter: ['C', 'C'], value: 200, zeros: 2 },
  { letter: ['C'], value: 100, zeros: 2 }
];
  
const romanNumeralsUnitOfThousand: SchemaRomanValue[] = [
  { letter: ['M', 'M', 'M'], value: 3000, zeros: 3 },
  { letter: ['M', 'M'], value: 2000, zeros: 3 },
  { letter: ['M'], value: 1000, zeros: 3 }
];

export {
  romanNumeralsUnit,
  romanNumeralsTen,
  romanNumeralsHundred,
  romanNumeralsUnitOfThousand,
}