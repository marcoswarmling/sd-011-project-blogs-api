const { login } = require('../services/login');
const { status } = require('../Helpers/status&messages');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    if (token.status) {
      return res.status(token.status).json({ message: token.message });
    }
    return res.status(status.sucess).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { userLogin };
