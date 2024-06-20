function sumOfsquares() {
  return [...arguments].reduce((acc, arg) => acc + arg ** 2, 0);
}

console.log(sumOfsquares(10, 8, 2));
