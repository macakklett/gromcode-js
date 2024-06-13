function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

console.log(isPrime(4));

function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) console.log(i);
  }
}

console.log(getPrimes(15));

// function getPrimes(n) {
//   // Перевірка, що n більше 1
//   if (n < 2) {
//     console.log('Немає простих чисел менших або рівних', n);
//     return;
//   }

//   // Функція для перевірки, чи є число простим
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   // Виведення всіх простих чисел від 2 до n
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// // Приклад використання
// getPrimes(10); // Виведе: 2, 3, 5, 7
