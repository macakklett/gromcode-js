// algoritm
// method array <filter> get array and returned sorted array, method is not mutable(is good!!!);

const getSpecialNumbers = arr => arr.filter(el => el % 3 === 0);

const array = [10, 3, 6, 14, 15, 19, 21, 9];
console.log(getSpecialNumbers(array));
console.log(array);
