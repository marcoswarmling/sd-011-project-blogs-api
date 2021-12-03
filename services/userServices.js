const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
  // async e await para a validação que não é possível
  // cadastrar um usuário com email já existente
const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });

  const token = jwt.sign({ user: { displayName, email } }, JWT_SECRET);

  return token;
};

  const getAll = async () => {
  const users = await User.findAll();
  /* console.log('ESSE É O MEU RESPONSE DO USERS', users); */
  
  // .map para atender os requisitos de retornar um array de objeto da linha 20
  const getUserWithoutPassword = users.map(
    ({ dataValues: { id, displayName, email, image } }) => ({
    id, displayName, email, image }),
  );

  return getUserWithoutPassword;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) { 
    return { 
      error: 'User does not exist', 
    };
  }
  return user;
};
 
module.exports = { createUser, getAll, getById };