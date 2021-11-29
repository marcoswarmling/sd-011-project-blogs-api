const rescue = require('express-rescue');
const { createToken } = require('../services/loginService');

const createLogin = rescue(async (req, res) => {
  const { email, password } = req.body;
  const token = await createToken(email, password);
  console.log(token);
  if (token.message) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token });
});

module.exports = { createLogin };
