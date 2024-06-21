function getOwnProps(obj) {
  const arrProps = [];

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      arrProps.push(prop);
    }
  }

  return arrProps;
}

const ship = {
  name: 'Argo',
  width: 200,
  howManyPassagers: 3000,

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    Object.getPrototypeOf(this).move.call(this);
  },

  stopMachine() {
    Object.getPrototypeOf(this).stop.call(this);
    console.log(`${this.name} lifting anchor down`);
  },
};
console.log(ship);

console.log(getOwnProps(ship));
