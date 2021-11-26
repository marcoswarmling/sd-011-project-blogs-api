const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  await loginService.login();

  return null;
};

module.exports = {
  login,
};
