const cleanTransactionsList = arr => {
  return arr
    .filter(el => !isNaN(+el) && el !== '')
    .map(el => `$${Number.parseFloat(el).toFixed(2)}`);
};

const arr = ['10.11100009', '  14$  ', '  12dollars', '16.4', 17, 'fffff'];

console.log(cleanTransactionsList(arr));
