const jwt = require('jsonwebtoken');
const { status, loginMessages } = require('../Helpers/status&messages');
const { validLogin } = require('../Helpers/validateLogin');
const { User } = require('../models');

const JWT = 'SECRET';
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validações de body
    validLogin(email, password);
    // validação com o banco de dados
    const checkUser = await User.findOne({ where: { email } });
    if (!checkUser || checkUser.password !== password) {
      return res
      .status(status.badRequest)
      .json({ message: loginMessages.notRegistered });
    }
    // geração do token
    const token = jwt.sign({ email }, JWT);
    return res.status(status.sucess).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { userLogin };
