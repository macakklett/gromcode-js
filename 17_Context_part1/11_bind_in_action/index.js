function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

// const multiplier = (a, b) => {
//   const res = calculator.bind({ operation: '*' });
//   return res(a, b);
// };

// console.log(multiplier(10, 5));

const twice = a => {
  const res = calculator.bind({ operation: '*' });
  return res(a, 2);
};

console.log(twice(10));
