// const { User } = require('../models');
// const service = require('../services/userServices');
require('dotenv').config();

const validateName = (req, res, next) => {
  const { displayName } = req.body;

  const message = '"displayName" length must be at least 8 characters long';

  if (displayName && displayName.length < 8) {
    return res.status(400).json({ message });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;

  const msgRequired = '"email" is required';
  const msgValidEmail = '"email" must be a valid email';

  if (!email || email === undefined) {
    return res.status(400).json({ message: msgRequired });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: msgValidEmail });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const msgRequired = '"password" is required';
  const msgLength = '"password" length must be 6 characters long'; 

  if (!password) {
    return res.status(400).json({ message: msgRequired });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: msgLength });
  }

  next();
};

// const checkEmailExists = async (req, res, next) => {
//   const { email } = req.body;
//   const findEmail = await service.getUserEmail(email);
//   console.log(email, 1);
//   console.log(findEmail, 2);
//   if (findEmail) { 
//     res.status(409).json({ message: 'User already registered' });
//   }

//   next();
// };

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  // checkEmailExists,
};
