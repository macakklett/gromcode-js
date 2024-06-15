const getPeople2 = obj => {
  const objs = Object.values(obj);
  console.log(objs);
  const arrs = objs.flat();
  console.log(arrs);
  return arrs.map(obj => {
    console.log(obj);
    return obj.name;
  });
};

const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(obj => obj.name);
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
    // ...
  ],
  room2: [
    { name: 'Dan' },
    // ...
  ],
  room3: [
    { name: 'Denis' },
    { name: 'Max' },
    { name: 'Alex' },
    // ...
  ],
  // ...
};

console.log(getPeople(rooms));
