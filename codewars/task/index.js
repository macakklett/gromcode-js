function hasArithmProg(arr) {
  if (arr.length <= 2) return undefined;

  const allElementsEqual = arr => arr.every(el => el === arr[0]);

  const arrDiff = arr.reduce((acc, el, index, arr) => {
    if (index === 0) return [];
    return [...acc, el - arr[index - 1]];
  }, []);

  if (allElementsEqual(arrDiff)) return true;

  // return arrDiff;
}

console.log(hasArithmProg([90, 2, 4, 6, 8, 14]));
