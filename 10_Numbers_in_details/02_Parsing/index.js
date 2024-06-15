const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

const arr = [10, 10.02, 1.00001, NaN, Infinity, -Infinity, 100, '13.0001', '6'];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
