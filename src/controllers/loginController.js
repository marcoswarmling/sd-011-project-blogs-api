const loginService = require('../services/loginService');

const loginUser = async (req, res, next) => {
  const { body } = req;

  const token = await loginService.loginUser(body);
 
  if (token.err) return next(token.err);

  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};
