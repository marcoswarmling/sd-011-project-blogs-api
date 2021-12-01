const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createNewUser = async (displayName, email, password, image) => {
  try {
    const createUser = await User.create({ displayName, email, password, image });
    return createUser;    
  } catch (error) {
    return error.message;
  }   
};

const login = async (email, password) => {
  try {
    const findUser = await User.findOne({ where: { email } });

    /* verifica se a senha é correta, ajuda do plantão, essa validação basicamente verifica se
       a senha inserida é igual a registrada no banco, liberando o login ao usuário */
    if (password === findUser.password) { 
      const token = jwt.sign({ email, id: findUser.id }, secret, jwtConfig);
      return token;
    }
      throw new Error('Senha incorreta!');
  } catch (error) {
    return error.message;
  }
};

const getAll = async () => {
  const data = await User.findAll();
  return data;
};

const getById = async (id) => {
  const result = await User.findByPk(id);
  return result;
};

module.exports = {
  createNewUser,
  login,
  getAll,
  getById,
};
