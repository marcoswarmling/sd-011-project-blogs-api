const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = 'segredo';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.login(email, password);

  if (response && response.message) {
    return res.status(401).json(response);
  }

  const { _id, email: userEmail, role } = response;

  const token = jwt.sign({ _id, userEmail, role }, secret, jwtConfig);
  
  return res.status(200).json({ token });
};

module.exports = {
  login,
};