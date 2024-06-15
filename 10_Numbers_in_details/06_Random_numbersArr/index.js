const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toFloor = Math.floor(to);

  if (toFloor - Math.floor(from) < 1) return null;

  return Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * (toFloor - fromCeil + 1)) + fromCeil);
};

// examples
console.log(getRandomNumbers(50, 90.5, 95)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
