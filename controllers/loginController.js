require('dotenv').config();
const jwt = require('jsonwebtoken');
// const { Users } = require('../models');

const jwtConfig = { expiresIn: '120m', algorithm: 'HS256' };

const login = async (req, res) => {
  try {
    // const response = await Users.findAll();
    // console.log('users', response);
    const { email, password } = req.body; 
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    // console.log('login', err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { login };