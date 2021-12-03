const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');
const { secret, jwtConfig } = require('../utils/configToken');

const {
  CONFLICT, CREATED, NOT_FOUND, STATUS_OK } = require('../utils/statusMessage');

const registerUser = async (displayName, email, password, image) => {
  const doesEmailExists = await Users.findOne({ where: { email } });

  if (doesEmailExists) return { status: CONFLICT, message: { message: 'User already registered' } };

  await Users.create({ displayName, email, password, image });

  const userWithoutPwd = {
    displayName,
    email,
  };
  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfig);
  return { status: CREATED, message: { token } };
};

const getAllUsers = async () => {
  const allUsers = await Users.findAll();

  if (!allUsers) return { status: NOT_FOUND, menssage: { menssage: 'No users found' } };

  return { status: STATUS_OK, message: allUsers };
};

/* const getOneUser = async (id) => {
  const user = await Users.findOne({ where: { id } });

  if (!user) throw new Error('User does not exist');

  return user;
}; */

module.exports = {
  registerUser,
  getAllUsers,
};
