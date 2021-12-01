const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;   

const create = async (displayName, email, password, image) => {
  // {displayName, email, password, image} - se deixo desestruturado não consigo validar o email registrado. Crio o usuario e verifico se está autorizado (401)
  const newUser = await Users.create(displayName, email, password, image);
  // console.log('newUserService:', newUser);
  if (!newUser) {
    return {
      err: {
        code: 401,
        message: 'Incorrect username or password',
      },
    };
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
 
  // gero o token e o retorno
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  
  return token;
};

module.exports = {
  create,
}; 