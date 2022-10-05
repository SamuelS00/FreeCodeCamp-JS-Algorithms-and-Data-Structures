// Letra maior a esquerda --> ADIÇÃO. XI: 11
// Letra maior a direita --> SUBTRAÇÃO. IX: 9 ou letra menor a esquerda.

// Repetição do mesmo símbolo. Limitado a 3 repetições. --> ADIÇÃO. XXX: 30; XL: 40; L: 50;
// Exceção: O algorismo D: 500, nunca aparecerá mais de uma vez representando um número. Por causa do M. --> M:1000  

// O Algorismo I só pode anteceder V ou X.
// O Algorismo X só pode anteceder L ou C.
// O Algorismo C só pode antecer D ou M.

// Números terminados em 4 acabam em IV;
// Números terminados em 9 acabam em IX;

import { SchemaRomanValue, SchemaDecomposedNumber } from './interfaces';

import {
  romanNumeralsUnit,
  romanNumeralsTen,
  romanNumeralsHundred,
  romanNumeralsUnitOfThousand
} from './utilities/romanNumerals'

const decomposeNumber = (num: number): SchemaDecomposedNumber[] => {
  const arrNum = String(num).split('').reverse();

  const decomposedNumber = arrNum.map((n, i) => (
    { 
      value: Number(n.concat('0'.repeat(i))),
      zeros: i 
    })
  ); 

  return decomposedNumber.reverse();
};

const filterRomanNumerals = (romanNumerals: SchemaRomanValue[], value: number) => {
  const filteredRomanNumerals = romanNumerals.filter((n) => n.value === value);
  return filteredRomanNumerals;
};

const concatFunction = (arrNum: string[]) => {
  const romanNumeralString = arrNum.reduce((a, c) => a.concat(c), '').trim();
  return romanNumeralString;
};

function createRomanNumerals(compositeNumber: SchemaDecomposedNumber) {
  let zeros: number;
  let romanNumber: SchemaRomanValue[] = [];

  if (compositeNumber.value === 0) return '';

  switch (compositeNumber.zeros) {
    case 0:
      romanNumber = filterRomanNumerals(romanNumeralsUnit, compositeNumber.value);
      break;
    case 1: 
      romanNumber = filterRomanNumerals(romanNumeralsTen, compositeNumber.value);
      break;
    case 2:
      romanNumber = filterRomanNumerals(romanNumeralsHundred, compositeNumber.value);
      break;
    case 3:
      romanNumber = filterRomanNumerals(romanNumeralsUnitOfThousand, compositeNumber.value);
      break;
  };

  return romanNumber.map((decomposed) => decomposed.letter)[0];
};

//// main /////

function convertToRoman(num: number) {
  const decomposedNumber = decomposeNumber(num);
  const arrRomanLetters = decomposedNumber.map((d) => createRomanNumerals(d));
  const romanNumberString = arrRomanLetters.flatMap((digit) => digit);

  return concatFunction(romanNumberString);
};

export {
  convertToRoman,
  filterRomanNumerals,
  concatFunction,
  decomposeNumber,
};