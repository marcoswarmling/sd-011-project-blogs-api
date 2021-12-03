const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const service = require('../service/loginService');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await service.login(email, password);
    const payload = { data: result };
    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { login };