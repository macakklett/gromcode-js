const calc = value => {
  let result = value;

  const calculator = {
    add(num) {
      result += num;
      return this;
    },

    subtract(num) {
      result -= num;
      return this;
    },

    mult(num) {
      result *= num;
      return this;
    },

    div(num) {
      result /= num;
      return this;
    },

    result() {
      return result;
    },
  };

  return calculator;
};

console.log(calc(3).add(15).subtract(8).mult(5).div(2).result());
