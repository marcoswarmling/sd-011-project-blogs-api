const loginService = require('../services/loginService');

const loginUser = async (req, res, next) => {
  const { body, headers: { token } } = req;
  const user = await loginService.loginUser(body);

  if (user.err) next(user.err);

  if (user) return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};
