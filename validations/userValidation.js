const { User } = require('../models');

const isValidDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  return next();
};

const userExists = async (req, res, next) => {
  const { email } = req.body;

  const userEmail = await User.findOne({ where: { email } });

  if (userEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  return next();
};

const isValidEmail = async (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({
      message: '"email" is not allowed to be empty',
    });
  }

  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',

    });
  }
  return next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({
      message: '"password" is not allowed to be empty',
    });
  }
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  return next();
};

module.exports = {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  userExists,
};