const { User } = require('../models');

const validateName = async (req, res, next) => {
  const { displayName } = req.body;

  const message = '"displayName" length must be at least 8 characters long';

  if (displayName.length < 8) {
    return res.status(400).json({ message });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
  const userEmail = User.findOne({ where: { email } });

  const msgRequired = '"email" is required';
  const msgRegistered = 'User already registered';
  const msgValidEmail = '"email" must be a valid email';

  if (!email) {
    res.status(400).json({ message: msgRequired });
  } else if (userEmail) {
    res.status(409).json({ message: msgRegistered });
  } else if (!emailRegex.test(email)) {
    res.status(400).json({ message: msgValidEmail });
  }

  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  const msgRequired = '"password" is required';
  const msgLength = '"password" length must be 6 characters long';

  if (!password) {
    res.status(400).json({ message: msgRequired });
  } else if (password.length !== 6) {
    res.status(400).json({ message: msgLength });
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
