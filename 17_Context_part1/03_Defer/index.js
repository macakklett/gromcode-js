function defer(func, ms) {
  return function () {
    setTimeout(() => {
      func.apply(this, arguments);
    }, ms);
  };
}

const user = {
  name: 'Tom',

  sayHi() {
    console.log(`Hello, my name ${this.name}`);
  },
};

const deferedSayHi = defer(user.sayHi, 1000);
deferedSayHi.call({ name: 'Bob' });
