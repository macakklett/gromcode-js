function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;

  return arr.slice(0).reverse();
}

// examples
console.log(reverseArray([10, 2, 10, 1, 8, 10]));
console.log(reverseArray([0, 0, 1, 3, 1, 5, 8, 4]));
