const add = num => num + 33;
const subtract = num => num - 13;
const mult = num => num * 3;
const div = num => num / 2;

const compose =
  (...functions) =>
  value => {
    return functions.reduce((acc, func) => func(acc), value);
  };

const superF = compose(add, subtract, mult, div);
console.log(superF(5));
