const db = require('../models');

const nameLengthValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
  const isValidEmail = emailRegex.test(email);

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!isValidEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const checkEmailAlreadyRegistered = async (req, res, next) => {
  const { email } = req.body;
  const checkAllUsers = await db.Users.findAll();
  const userByEmail = checkAllUsers.some((user) => user.email === email);
  if (userByEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  emailValidation,
  nameLengthValidation,
  passwordValidation,
  checkEmailAlreadyRegistered,
};
