require('dotenv').config();
// const jwt = require('jsonwebtoken');
const { Users } = require('../models');

// const passwordJWT = process.env.JWT_SECRET;

const create = async ({ displayName, email, password, image }) => {
  console.log(displayName, email, password, image);
  const userData = { displayName, email, password, image };
  const newUser = await Users.create(userData);
  if (!newUser) {
    return { message: 'User already exists' };
  }
  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };
  // const token = jwt.sign(newUser, passwordJWT, jwtConfig);
  // console.log(newUser);
  const token = 'asijsaijsaijsaij';

 return token;
};

const find = async (email) => {
  console.log(`aqui é o ${Users}`);
  const users = await Users.findOne({
    where: { email },
  });
  return users;
};

module.exports = {
  create,
  find,
};