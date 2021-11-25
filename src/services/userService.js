const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const userRegister = async (displayName, email, password, image) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) return ({ message: 'User already registered' });

  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const loginRegister = async (email, password) => {
  const userExists = await User.findOne({ where: { email, password } });
  if (!userExists) return ({ message: 'Invalid fields' });

  const createToken = jwt.sign({
    id: userExists.id,
    email: userExists.email,
    password: userExists.password,
  }, process.env.JWT_SECRET);

  return { token: createToken };
};

const getUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
  userRegister,
  loginRegister,
  getUsers,
};