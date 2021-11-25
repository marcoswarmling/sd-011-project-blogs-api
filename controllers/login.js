const { status, loginMessages } = require('../Helpers/status&messages');
const { generateToken } = require('../Helpers/authorizations');
const { validLogin } = require('../Helpers/validateLogin');
const { User } = require('../models/users');

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
    const { id } = checkUser;
    const token = generateToken(id, email); 
    return res.status(status.sucess).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { userLogin };
