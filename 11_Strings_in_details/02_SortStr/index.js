// const sortContacts = (arr, direction = true) => {
//   if (!Array.isArray(arr)) return null;

//   if (!direction) return arr.sort((a, b) => b.name.localeCompare(a.name));
//   return arr.sort((a, b) => a.name.localeCompare(b.name));
// };

const sortContacts = (arr, direction = true) => {
  if (!Array.isArray(arr)) return null;

  return arr.sort((a, b) => {
    if (direction) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
};

const arr = [
  { name: 'Tom', 'phone-number': 777777 - 23 },
  { name: 'Adel', 'phone-number': 775477 - 23 },
  { name: 'Ayna', 'phone-number': 777177 - 23 },
  { name: 'Bob', 'phone-number': 777787 - 23 },
  { name: 'Shvartcz', 'phone-number': 773777 - 23 },
  { name: 'Ignat', 'phone-number': 7755557 - 23 },
];

console.log(arr.sort((a, b) => a.name.localeCompare(b.name)));
console.log(arr.sort((a, b) => b.name.localeCompare(a.name)));
console.log('Tom'.localeCompare('Ade'));
console.log('Ade'.localeCompare('Tom'));

// console.log(sortContacts(arr));
// console.log(sortContacts(arr, false));
