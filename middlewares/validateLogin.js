const { Users } = require('../models');

const error = 'Invalid fields';

const isValidateEmailBinding = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
    }
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next(); 
};

const isisValidatePasswordBinding = async (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const isValidateEmail = async (req, res, next) => {
  const { email } = req.body;
  const validateUserEmail = await Users.findOne({ where: { email } });
  const emailReg = /\S+@\S+\.\S+/;
  if (!emailReg.test(email)) {
    return res.status(400).json({ message: error });
    }  
  if (email !== validateUserEmail.email) {
    return res.status(400).json({ message: error });
  }
  next();
};

const isValidatePassword = async (req, res, next) => {
  const { password } = req.body;
  const validateUserPassword = await Users.findOne({ where: { password } });
  if (validateUserPassword === null || !validateUserPassword) {
    return res.status(400).json({ message: error });
  }
  if (password !== validateUserPassword.password) {
    return res.status(400).json({ message: error });
  }

  next();
};

module.exports = {
  isValidateEmailBinding,
  isisValidatePasswordBinding,
  isValidateEmail,
  isValidatePassword,
}; 