const jwt = require('jsonwebtoken');

const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (email, id) => {
  const payload = {
    id,
    email,
  }
  
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

const createUser = async ({ displayName, email, password, image }) => {

  const newUser = await User.create({ displayName, email, password, image });

  

  const token = generateToken(email, newUser.id);

  return token;
};

module.exports = {
  createUser,
};