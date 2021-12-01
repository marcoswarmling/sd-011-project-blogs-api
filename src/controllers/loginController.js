const rescue = require('express-rescue');
// const loginService = require('../services/loginService');
const { STATUS_CODE_BAD_REQUEST } = require('../helpers');
const userService = require('../services/userService');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const findUserByEmail = await userService.getUserByEmail(email);
  if (!findUserByEmail || findUserByEmail.password !== password) {
    return res.status(STATUS_CODE_BAD_REQUEST).json({
      message: 'Campos inválidos',
    });
  }
  console.log(findUserByEmail);
  return res.json(findUserByEmail);
});

module.exports = { login };