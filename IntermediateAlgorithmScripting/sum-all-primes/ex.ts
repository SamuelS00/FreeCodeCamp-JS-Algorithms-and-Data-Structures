function sumPrimes(num: number) {
  let peneira: boolean[] = [];
  let primes: number[] = [];
  let sum: number;

  for (let i = 2; i <= num; ++i) {
    if (!peneira[i]) {

      primes.push(i);

      for (let j = i << 1; j <= num; j += i) {
        peneira[j] = true;
      }
    }
  }
  
  sum = primes.reduce((a, c) => a + c, 0);

  return sum;
};

console.log(sumPrimes(10));

export default sumPrimes;