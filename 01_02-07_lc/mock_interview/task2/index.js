function intersection(firstArr, secondArr) {
  return firstArr.reduce((acc, el) => {
    if (secondArr.includes(el)) {
      return [...acc, el];
    }
    return acc;
  }, []);
}

// examples
console.log(intersection([1, 2, 3], [2, 3, 4, 5])); // returns ==> [2, 3]
console.log(intersection([4, 8, -1], [1, 2])); // returns ==> []
