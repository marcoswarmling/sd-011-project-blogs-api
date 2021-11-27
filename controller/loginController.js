const loginServices = require('../services/loginServices');

const ERROR_MESSAGE = { message: 'error interno' };

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginServices.getUserByEmail(email, password);
    if (token.message) {
      return res.status(400).json(token);
    }
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  userLogin,
};