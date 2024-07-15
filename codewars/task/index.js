// Find sum of two lawest values of array---------------------------------------------------------------------------------------------
// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a, b) => a - b);
//   console.log(numbers[0] + numbers[1]);
// }

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13, 'Sum should be 13');
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6, 'Sum should be 6');
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]); // 10, 'Sum should be 10');
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]); // 24, 'Sum should be 24');
// sumTwoSmallestNumbers([52, 76, 14, 12, 4]); // 16, 'Sum should be 16');

// Check narcissistic value(число Армстронга)------------------------------------------------------------------------------------------
// function narcissistic(value) {
//   const arr = String(value).split('');
//   const result = arr.reduce((acc, el) => {
//     const num = (+el) ** arr.length;
//     return acc + num;
//   }, 0);

//   return result === value;
// }

// console.log(narcissistic(153));
// console.log(narcissistic(7));
// console.log(narcissistic(12));
// console.log(narcissistic(487));

// sort weight----------------------------------------------------------------------------------------------------------------------
// function orderWeight(string) {
//   const arr = string.split(' ');
//   const weightArr = arr.map(el => ('' + el).split('').reduce((acc, num) => acc + +num, 0));
//   const weightedArr = arr.map((el, index) => ({ weight: weightArr[index], value: el }));
//   weightedArr.sort((a, b) => a.weight - b.weight);
//   return weightedArr.map(({ value }) => value).join(' ');
// }

// console.log(orderWeight('103 123 4444 99 2000')); // "2000 103 123 4444 99")
// console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')); // "11 11 2000 10003 22 123 1234000 44444444 9999")

// sort odd and even numbers---------------------------------------------------------------------------------------------------------
// function sortItOut(array) {
//   const oddArr = array.filter(el => el % 2 === 1);
//   const evenArr = array.filter(el => el % 2 === 0);
//   oddArr.sort((a, b) => a - b);
//   evenArr.sort((a, b) => b - a);
//   return oddArr.concat(evenArr);
// }

// console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78])); // [11,33,55,55,90.4,78,44,22,4]

// Find uniq element from array-------------------------------------------------------------------------------------------------------
// function findUniq(arr) {
//   const [first, second, third] = arr;
//   if (first === second && second === third) {
//     for (let i = 2; i < arr.length; i += 1) {
//       if (arr[i] !== arr[i + 1]) return arr[i + 1];
//     }
//   } else {
//     if (first === second) return third;
//     if (first === third) return second;
//     else return first;
//   }
// }

// console.log(findUniq([3, 3, 3, 3, 10, 3, 3, 3]));
// console.log(findUniq([1, 0, 1]));

function queueTime(customers, n) {
  if (n === 1) return customers.reduce((acc, el) => acc + el);
  if (customers.length <= n) return Math.max(...customers);

  const hoursOfKassaArr = customers.slice(0, n);

  customers.slice(n).forEach(el => {
    const min = Math.min(...hoursOfKassaArr);
    const index = hoursOfKassaArr.indexOf(min);
    hoursOfKassaArr[index] += el;
    console.log(hoursOfKassaArr);
  });

  return Math.max(...hoursOfKassaArr);
}

console.log(queueTime([5, 12, 6, 9, 2, 8, 4, 12, 7], 3));
