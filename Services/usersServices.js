const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const createUser = async (displayName, email, password, image) => {
  const userExists = await Users.findOne({ where: { email } });
  if (userExists) { return { errorCode: 'USER_ALREADY_EXISTS' }; }  
  
  await Users.create({ displayName, email, password, image });
  
  const topSecret = 'senha';
  const jwtconfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const dataOfUser = {
    displayName,
    email,
  };
  // console.log(dataOfUser);
  const token = jwt.sign({ data: dataOfUser }, topSecret, jwtconfig);
  return token;
};

module.exports = {
  createUser,
};