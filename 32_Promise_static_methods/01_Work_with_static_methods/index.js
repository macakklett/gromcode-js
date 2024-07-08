const pr1 = Promise.resolve(100);
const pr2 = Promise.resolve(undefined);
// const pr3 = Promise.reject(new Error("Can't calculate\\"));
const pr4 = Promise.resolve('7');

const getSum = arr => arr.filter(el => !isNaN(el)).reduce((acc, el) => acc + Number(el), 0);

export const asyncSum = (...promises) => {
  return Promise.all(promises)
    .then(data => console.log(getSum(data)))
    .catch(error => console.log(error));
};

asyncSum(pr1, pr2, pr4);
