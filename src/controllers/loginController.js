const loginService = require('../services/loginService');

const loginUser = async (req, res, next) => {
  const { body } = req;
  const token = req.headers.authorization;

  const user = await loginService.loginUser(body);
  console.log('user', user);

  if (user.err) return next(user.err);

  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};
