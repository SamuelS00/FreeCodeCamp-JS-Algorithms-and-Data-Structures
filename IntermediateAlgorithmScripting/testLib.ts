function assert(description: string, value: Boolean) {
    if (!value) return console.log(`${description} - ❌ test`);
    return console.log(`${description} - ✔️ test`);
};

function equal<T>(description: string, value1: T, value2: T) {
    if(!(value1 !== value2)) return console.log(`${description} - ❌ test`);
    return console.log(`${description} - ✔️ test`);
};

export {
   assert,
   equal,
}