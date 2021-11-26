const { checkBodyLogin } = require('../helpers/checkBodyLogin');

const checkLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const error = await checkBodyLogin(email, password);
  if (error.message) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { checkLogin };