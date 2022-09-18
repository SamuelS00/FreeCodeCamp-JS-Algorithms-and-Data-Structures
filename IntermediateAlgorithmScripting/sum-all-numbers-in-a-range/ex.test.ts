import sumAll from './ex';

function assert(value: Boolean) {
    if (!value) { throw new Error('Invalid valie') }
    console.log(`✔️ test`)
};

assert(sumAll([5, 10]) === 45);

assert(sumAll([4, 1]) === 10);

assert(sumAll([10, 5]) === 45);