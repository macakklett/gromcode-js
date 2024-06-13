function checker(arr) {
  if (!Array.isArray(arr)) return null;

  function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    console.log(max);
    return max;
  }

  function getMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    console.log(min);
    return min;
  }

  if (getMax(arr) + getMin(arr) > 1000) return true;
  return false;
}

console.log(checker([10, 4, 3, 1, 99, 14, 5, 999]));
