const superRound = (num, prec) => {
  let floatCol = '1';
  for (let i = 0; i < prec; i += 1) {
    floatCol += '0';
  }

  return [
    Math.floor(num * floatCol) / floatCol,
    Math.trunc(num * floatCol) / floatCol,
    Math.ceil(num * floatCol) / floatCol,
    Math.round(num * floatCol) / floatCol,
    +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(-6.1119, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
