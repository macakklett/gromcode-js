type UserRole = 'member' | 'admin' | 'contributor';

type User = {
  id: number;
  userName: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId: number = 1;

const users: User[] = [
  { id: nextUserId++, userName: 'jhon_doe', role: 'member' },
  { id: nextUserId++, userName: 'jhan_doe', role: 'admin' },
  { id: nextUserId++, userName: 'guest_user', role: 'contributor' },
  { id: nextUserId++, userName: 'Charlie Brown', role: 'member' },
];

const addUser = (newUser: Omit<User, 'id'>): User => {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
};

const fetchUserDetails = (name: string): User => {
  const user = users.find(user => user.userName === name);
  if (!user) {
    throw new Error(`User with name ${name} not found`);
  }

  return user;
};

const updateUser = (id: number, updates: UpdatedUser): void => {
  const user = users.find(user => user.id === id);
  if (!user) {
    console.error(`User with id ${id} not found`);
    return;
  }

  Object.assign(user, updates);
};

updateUser(1, { userName: 'new_jhon_doe' });
updateUser(3, { role: 'contributor' });
