const { findUserByEmail } = require('../services/users');

const displayNameValidation = (req, res, next) => {
  const { displayName } = req.body;
  
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  
  if (password.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long' });
  }

  next();
};

const requiredPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length === 0) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

const validateRegistereduser = async (req, res, next) => {
  const { email } = req.body;

  const findUser = await findUserByEmail(email);

  if (findUser) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = {
  displayNameValidation,
  emailValidation,
  passwordValidation,
  requiredPassword,
  validateRegistereduser,
};