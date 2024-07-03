const mult = operandOne => operandTwo => operandOne * operandTwo;
console.log(mult(2)(8));

const twice = num => mult(num)(2);
console.log(twice(10));

const triple = num => mult(num)(3);
console.log(triple(10));
