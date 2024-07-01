localStorage.setItem('name', 'Tom');
localStorage.setItem('age', 30);
localStorage.setItem('prof', 'engineer');
const user = {
  name: 'Ivan',
  age: 29,
  prof: 'accountant',
};

localStorage.setItem('user', JSON.stringify(user));

// console.log(localStorage);

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;

    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }

    return { ...acc, [key]: newValue };
  }, {});
};

console.log(getLocalStorageData());
