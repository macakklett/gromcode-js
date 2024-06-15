function compareObjects(obj1, obj2) {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);

  return (
    keysArr1.length === keysArr2.length &&
    keysArr1.every(key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key])
  );
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
