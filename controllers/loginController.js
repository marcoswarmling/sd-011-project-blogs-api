require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const jwtConfig = { expiresIn: '120m', algorithm: 'HS256' };

const login = async (req, res) => {
  try {
    console.log('aqui');
    const users = await Users.findAll({ raw: true });
    console.log('users', users);
    const { email, password } = req.body; 
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { login };