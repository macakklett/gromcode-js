/* eslint-disable prefer-object-spread */

// Функція mergeObjectsV1 з пріоритетом властивостей з другого об'єкта
function mergeObjectsV1(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// Функція mergeObjectsV2 з пріоритетом властивостей з першого об'єкта
function mergeObjectsV2(obj1, obj2) {
  return Object.assign({}, obj2, obj1);
}

// Функція mergeObjectsV3 з пріоритетом властивостей з другого об'єкта, використовуючи spread оператор
function mergeObjectsV3(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Функція mergeObjectsV4 з пріоритетом властивостей з першого об'єкта, використовуючи spread оператор
function mergeObjectsV4(obj1, obj2) {
  return { ...obj2, ...obj1 };
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
