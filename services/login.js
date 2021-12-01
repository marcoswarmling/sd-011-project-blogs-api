const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { status, loginMessages } = require('../Helpers/status&messages');

const JWT = 'SECRET';
 
 const login = async (email, password) => {
  // validação com o banco de dados
  const checkUser = await User.findOne({ where: { email } });
  if (!checkUser || checkUser.password !== password) {
    return { status: status.badRequest, message: loginMessages.notRegistered };
  }
  // geração do token
  const token = jwt.sign({ email }, JWT);
  return token;
};

 module.exports = { login };
