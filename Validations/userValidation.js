const db = require('../models');

const nameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /[a-z0-9]+[_a-z0-9.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/g;
  const validEmail = regexEmail.test(email);
  
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!validEmail) {
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

const emailExists = async (req, res, next) => {
  const { email } = req.body; 
  const users = await db.Users.findAll();
  const userEmail = users.some((user) => user.email === email);
  if (userEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passwordValidation,
  emailExists,
};