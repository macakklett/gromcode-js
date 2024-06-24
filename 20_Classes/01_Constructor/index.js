class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.age = newAge;
    }
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
  }
}

const user1 = new User('Did Ivan', 88);
console.log(user1);
console.log(user1.sayHi());
console.log(user1.requestNewPhoto());
user1.setAge(90);
console.log(user1.age);
user1.setAge(12);
console.log(user1.age);
user1.setAge(-12);
console.log(user1.age);

const user2 = User.createEmpty();
console.log(user2);
