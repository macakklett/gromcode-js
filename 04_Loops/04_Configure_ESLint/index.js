function run() {
  var a = 0;

  if (a == 1) {
    return c;
  }

  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  return (d = a);
}

run();
// Unexpected var, use let or const instead
// Expected '===' and instead saw '=='
// 'c' is not defined
// Unary operator '++' used
// Return statement should not contain assignment
// 'd' is not defined
