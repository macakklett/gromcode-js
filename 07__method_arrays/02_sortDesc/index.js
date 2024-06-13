// algoritm
// cool practice, method <slice> copy array from index in parametr, not mutable
// method array <sort> get array and returned sorted array, method is mutable(!!!!!!!!!!!!!!);

const sortDesc = arr => arr.slice(0).sort((a, b) => b - a);
const flatArray = arr =>
  arr
    .slice(0)
    .reduce((acc, elOfArr) => acc.concat(elOfArr), [])
    .sort((a, b) => b - a);

// const array = [10, 3, 6, 14, 15, 19, 21, 9];
// console.log(sortDesc(array));
// console.log(array);

const array = [10, 3, 6, [10, 2, 6], 14, 15, [3, 0], 19, 21, [1], 9];
console.log(flatArray(array));
console.log(array);
