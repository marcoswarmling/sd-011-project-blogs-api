const { User } = require('../models');
const { generateToken } = require('../Helpers/jwt');
const { status, loginMessages } = require('../Helpers/status&messages');
 
 const login = async (email, password) => {
  // validação com o banco de dados
  const checkUser = await User.findOne({ where: { email } });
  if (!checkUser || checkUser.password !== password) {
    return { status: status.badRequest, message: loginMessages.notRegistered };
  }
  // geração do token
  const token = generateToken(email);
  return token;
};

 module.exports = { login };
