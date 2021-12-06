const { Users } = require('../models');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regexValidation = /\S+@\S+\.\S+/;

  const regexEmail = regexValidation.test(email);

  if (!regexEmail) { 
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const emailExists = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const passwordExists = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const checkUniqueUser = async (req, res, next) => {
  const { email } = req.body;
 const findByEmail = await Users.findOne({ where: { email } });
 if (findByEmail) {
  return res.status(409).json({ message: 'User already registered' });
 }
 next();
};

module.exports = { validateEmail, 
  checkUniqueUser,
validPassword,
emailExists,
passwordExists,
checkDisplayName };