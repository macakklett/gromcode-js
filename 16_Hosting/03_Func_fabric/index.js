const createArrayOfFunctions = num => {
  console.log(num);
  if (typeof num !== 'number') return null;
  if (num === undefined) return [];

  const arr = [];

  for (let i = 0; i < num; i += 1) {
    arr.push(function () {
      return i;
    });
  }

  return arr;
};

console.log(createArrayOfFunctions()[5]());
