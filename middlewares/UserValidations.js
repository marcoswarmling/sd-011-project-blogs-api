const { User } = require('../models');

const displayNameLength = async (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
     });
  }
  next();
};

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  next();
};

const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (email === '@gmail.com' || !email.includes('@' && '.com')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const passwordExists = async (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const passwordLength = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const emailAlreadyExists = async (req, res, next) => {
  const { email } = req.body;

  const emailRegistered = await User.findOne({ where: { email } });

  if (emailRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  displayNameLength,
  emailExists,
  emailValidation,
  emailAlreadyExists,
  passwordExists,
  passwordLength,
};
