import { assert, equal } from '../testLib';

import {
  diffArrResult1,
  diffArrResult2,
  diffArrResult3,
  diffArrResult4 
} from './results';

assert('1- should return an array', Array.isArray(diffArrResult1));

equal('2 - should return ["pink wool"]', diffArrResult2, ["pink wool"]);

assert('3 - should return an array with one item.', diffArrResult2.length === 1);

equal('4 - should return ["diorite", "pink wool"].', diffArrResult3, ["diorite", "pink wool"]);

equal('5 - should return an empty array..', diffArrResult4, []);
