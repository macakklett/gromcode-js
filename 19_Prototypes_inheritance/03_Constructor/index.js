function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }

  this.age = newAge;

  if (newAge >= 25) {
    this.requestNewPhoto();
  }

  return newAge;
};

const user1 = new User('Tom', 29);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(35);
console.log(user1.age);
user1.setAge(12);
console.log(user1.age);
user1.setAge(-5);
console.log(user1.age);
