function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;

  return arr.slice(0).map(el => (el % 2 === 0 ? el + delta : el));
}

// examples
console.log(increaseEvenEl([10, 2, 10, 1, 8, 10], 5));
console.log(increaseEvenEl([0, 0, 1, 3, 1, 5, 8, 4], 2));
