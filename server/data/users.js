import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jhon Wick',
    email: 'jhonwick@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Arnold',
    email: 'illbeback@mail.ru',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
