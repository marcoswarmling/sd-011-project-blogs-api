const LoginService = require('../services/loginService');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await LoginService.userLogin(email, password);

  if (!user.token) {
    return res.status(400).json(user);
  }

  return res.status(200).json(user);
};

module.exports = { userLogin };