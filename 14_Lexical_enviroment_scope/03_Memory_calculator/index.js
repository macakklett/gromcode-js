let number = 0;

function add(n) {
  number += n;
}

function decrease(n) {
  number -= n;
}

function reset() {
  number = 0;
}

function getMemo() {
  return number;
}

console.log(number);
add(10);
console.log(number);
decrease(5);
console.log(number);
console.log(getMemo());
reset();
console.log(number);
