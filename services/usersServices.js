const JWT = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const getAllUsers = async () => {
  const getUsers = await Users.findAll();
  return getUsers;
};

const getEmailExist = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user;
};

const createUsers = async (displayName, email, password, image) => {
 const emailExist = await getEmailExist(email);
  if (emailExist) {
    return { msgError: 'msgError' };
  }

  await Users.create({ displayName, email, password, image });

  const userWithoutPassword = {
    displayName,
    email,
  };

  const token = JWT.sign({ data: userWithoutPassword }, SECRET, jwtConfig);
  return token;
};

module.exports = {
  getAllUsers,
  createUsers,
};
