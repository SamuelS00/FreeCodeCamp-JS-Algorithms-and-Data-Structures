import sumAll from './ex';
import { assert } from '../testLib';

assert('should return 45', sumAll([5, 10]) === 45);

assert('should return 10', sumAll([4, 1]) === 10);

assert('should return 45', sumAll([10, 5]) === 45);