// const wallet = {
//   transaction: [10, 5, 200, 500, 16],

//   getMax() {
//     return Math.max(...this.transaction);
//   },

//   getMin() {
//     return Math.min(...this.transaction);
//   },
// };

const wallet = {
  transaction: [10, 5, 200, 1, 500, 1600],

  getMax() {
    const res = Math.max.apply(null, this.transaction);
    return res;
  },

  getMin() {
    return Math.min.apply(null, this.transaction);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
