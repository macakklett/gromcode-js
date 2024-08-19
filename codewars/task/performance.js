// const start = performance.now();

// function productArray(numbers) {
//   return numbers.reduce((acc, el, index, arr) => {
//     const newArr = arr.slice(0);
//     newArr.splice(index, 1);
//     const newEl = newArr.reduce((acc, el) => acc * el, 1);
//     return [...acc, newEl];
//   }, []);
// }

// productArray([3, 27, 4, 2]);

// const end = performance.now();
// console.log(`Time taken: ${end - start} ms`);

// // console.log(productArray([3, 27, 4, 2]));

// const startV2 = performance.now();

// function productArrayV2(numbers) {
//   const n = numbers.length;
//   const leftProducts = new Array(n).fill(1);
//   const rightProducts = new Array(n).fill(1);
//   const result = new Array(n);

//   for (let i = 1; i < n; i++) {
//     leftProducts[i] = leftProducts[i - 1] * numbers[i - 1];
//   }

//   for (let i = n - 2; i >= 0; i--) {
//     rightProducts[i] = rightProducts[i + 1] * numbers[i + 1];
//   }

//   for (let i = 0; i < n; i++) {
//     result[i] = leftProducts[i] * rightProducts[i];
//   }

//   return result;
// }

// productArrayV2([3, 27, 4, 2]);

// const endV2 = performance.now();
// console.log(`Time taken: ${endV2 - startV2} ms`);

const start = performance.now();

function productArray(numbers) {
  return numbers.map(x => numbers.reduce((a, b) => a * b) / x);
}

productArray([3, 27, 4, 2]);

const end = performance.now();
console.log(`Time taken: ${end - start} ms`);

// const productArray = numbers => {
//   return numbers.map((_, index, arr) => {
//     return arr.reduce((acc, el, i) => {
//       return i !== index ? acc * el : acc;
//     }, 1);
//   });
// };
