const jwt = require('jsonwebtoken');

require('dotenv').config();

const loginService = require('../service/loginService');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  
    const response = await loginService.login(email, password);
  
    const token = await jwt.sign({ data: response }, secret, jwtConfig);
    
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  login,
};