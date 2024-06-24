export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUsersNames() {
    return this._users.map(user => user.name);
  }

  getUsersIds() {
    return this._users.map(user => user.id);
  }

  getUserNameById(id) {
    const user = this._users.find(user => user.id === id);
    return user ? user.name : undefined;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// отримати властивості можна
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// але змінити ці властивості не можна
// user.name = 'Bob'; // намагаємося змінити старе значення
// console.log(user.name); // ===> 'Tom' - але зміна проігнорована, оскільки відсутній setter

const users = [
  new User('1', 'Tom', 'session-id'),
  new User('2', 'Alice', 'session-id2'),
  new User('3', 'Bob', 'session-id3'),
];

const userRepository = new UserRepository(users);
console.log(userRepository.getUsersNames()); // ===> ['Tom', 'Alice', 'Bob']
console.log(userRepository.getUsersIds()); // ===> ['1', '2', '3']
console.log(userRepository.getUserNameById('1')); // ===> 'Tom'
console.log(userRepository.getUserNameById('4')); // ===> undefined
