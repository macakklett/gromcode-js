'use strict';

// put your code here
const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    Object.getPrototypeOf(this).move.call(this);
  },

  stopMachine() {
    Object.getPrototypeOf(this).stop.call(this);
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);
console.log(ship);
ship.startMachine();
ship.stopMachine();
ship.move();
ship.stop();
