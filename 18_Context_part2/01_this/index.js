const eventt = {
  message: `Welcome to the party!`,

  guests: [
    { name: 'John', age: 18, email: 'john@mail.com' },
    { name: 'Bob', age: 16, email: 'bob@mail.com' },
    { name: 'Anna', age: 19, email: 'anna@mail.com' },
  ],

  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};

console.log(eventt.getInvitations());
