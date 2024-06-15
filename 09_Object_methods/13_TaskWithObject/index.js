const getCustomersList = obj => {
  const customerList = Object.entries(obj)
    .map(([id, customer]) => ({
      ...customer,
      id,
    }))
    .sort((a, b) => a.age - b.age);

  return customerList;
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

// Result
// [
//   {
//     name: 'William',
//     age: 54,
//     id: 'customer-id-1',
//   },
//   {
//     name: 'Tom',
//     age: 17,
//     id: 'customer-id-2',
//   },
// ];

console.log(getCustomersList(customers));
