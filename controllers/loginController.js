const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const response = await loginService.login(email, password);

  const { err } = response;
  if (err) return res.status(400).json(err);

  return res.status(200).json(response);
};

module.exports = { login };