const db = require('../models');

const isDisplayNameValid = (req, res, next) => {
  const { displayName } = req.body;
  const minLength = 8;

  if (!displayName || displayName.length < minLength) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailRegex.test(email);

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!validEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  const requiredPasswordLength = 6;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== requiredPasswordLength) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const checkIfEmailIsRegistered = async (req, res, next) => {
  const { email } = req.body;
  const getUsers = await db.Users.findAll();
  const checkRegisteredUser = getUsers.some((user) => user.email === email);

  if (checkRegisteredUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  isDisplayNameValid,
  isEmailValid,
  isPasswordValid,
  checkIfEmailIsRegistered,
};
