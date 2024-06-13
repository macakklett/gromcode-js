function findDivCount(a, b, n) {
  let counter = 0;
  for (let i = a; i < b; i++) {
    if (i % n === 0) {
      console.log(i);
      counter++;
    }
  }

  if (counter < 1) return 0;
}

console.log(findDivCount(1, 20, 3));
// if (!Array.isArray(arr)) return null;
