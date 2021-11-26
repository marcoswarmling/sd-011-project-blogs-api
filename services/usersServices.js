const JWT = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const createUsers = async (displayName, email, password, image) => {
  // console.log('ENTROU NO SERVICES');
  const emailExist = await Users.findOne({ where: { email } });
 // console.log(emailExist, 'EMAILEXIST');
  if (emailExist) {
    return { msgError: 'MESSAGE_ERROR' };
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
  createUsers,
};
