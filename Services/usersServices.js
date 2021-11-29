const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');
require('dotenv').config();

const createUser = async (displayName, email, password, image) => {
  const userExists = await Users.findOne({ where: { email } });
  if (userExists) { return { errorCode: 'USER_ALREADY_EXISTS' }; }  
  
  const userCreated = await Users.create({ displayName, email, password, image });
  
 const topSecret = process.env.JWT_SECRET;
  const jwtconfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const dataOfUser = {
    id: userCreated.id,
    displayName,
    email,
  };
  // console.log(dataOfUser);
  const token = jwt.sign({ data: dataOfUser }, topSecret, jwtconfig);
  return token;
};

const getAllUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const getById = async (id) => {
  const user = Users.findByPk(id);
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getById,
};