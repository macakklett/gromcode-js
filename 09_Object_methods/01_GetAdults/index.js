// function getAdults(obj) {
//   if (Object.keys(obj).lenght === 0) return [];

//   const result = Object.entries(obj)
//     .filter(arr => arr[1] >= 18)
//     .map(arr => arr[0]);

//   return result;
// }
// console.log(getAdults(example));

function copyObj(obj) {
  return { ...obj };
}

// examples
const example = {
  Tom: 15,
  'John Doe': 19,
  Anna: 22,
};
console.log(copyObj(example));
