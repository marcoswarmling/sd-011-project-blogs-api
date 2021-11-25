const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });

  const token = jwt.sign({ user: { displayName, email } }, JWT_SECRET);

  return token;
};

const loginUser = async (email, password) => {
  const { displayName } = await User.findOne({ where: { email, password } });

  const token = jwt.sign({ user: { displayName, email } }, JWT_SECRET);

  return token;
};

const getAll = async () => {
  const users = await User.findAll();

  const usersWithoutPassword = users.map(
    ({ dataValues: { id, displayName, email, image } }) => ({
      id,
      displayName,
      email,
      image,
    }),
  );

  return usersWithoutPassword;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });
  
  if (!user) return { error: 'User does not exist' };

  return user;
};

module.exports = {
  createUser,
  loginUser,
  getAll,
  getById,
};
