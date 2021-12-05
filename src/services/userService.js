const { Users } = require('../models');
const { createToken, verifyToken } = require('../api/auth/jwt');

const createUser = async (displayName, email, password, image) => {
  const token = createToken(email);
  const user = await Users.findOne({
    where: { email },
  });
  
  if (user) {
    return { message: 'User already registered' };
  }
  
  await Users.create({ displayName, email, password, image });
  return { token };
};

const getUsers = async (token) => {
  try {
    verifyToken(token);
    const users = await Users.findAll();
    return users;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

const getUserById = async (id, token) => {
  try {
    verifyToken(token);
    const user = await Users.findByPk(id);
    return user;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};