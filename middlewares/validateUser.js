const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { createUser, loginUser } = require('../schemas/index');

const { JWT_SECRET } = process.env;

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const { error } = createUser.validate({
    displayName,
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginUser.validate({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const userExists = await User.findOne({ where: { email, password } });

  if (!userExists) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  
    next();
  });
};

module.exports = {
  validateUser,
  validateLogin,
  validateToken,
};
