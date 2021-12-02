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
    expiresIn: '10d',
  };
 
  // gero o token e o retorno
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  
  return token;
};

const login = async (email, password) => {
  const newUser = await Users.create(email, password);
  // console.log('newUserService:', newUser);
  if (!newUser) {
    return {
      err: {
        code: 401,
        message: 'Incorrect login',
      },
    };
  }

  // config com tempo e alg de assinatura
  const jwtConfig = {
    expiresIn: '10d',
  };
  
  // Assina com a secret e retorna o token, em caso de suceso.
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  
  return { token };
};

const getAll = async () => {
  const users = await Users.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  // console.log('getAllUserService', users);
  return users;
};

module.exports = {
  create,
  login,
  getAll,
}; 