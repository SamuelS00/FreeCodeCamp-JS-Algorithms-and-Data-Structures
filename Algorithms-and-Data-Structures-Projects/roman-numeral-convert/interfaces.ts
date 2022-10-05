import { CompositeRomanNumber } from './types';

export interface SchemaRomanValue {
  letter: CompositeRomanNumber,
  value: number,
  zeros: number
};
  
export interface SchemaDecomposedNumber {
  zeros: number,
  value: number
};
  