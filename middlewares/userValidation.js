const User = require('../models/User');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  // Regex para validação de email encontrado no site: https://www.w3resource.com/javascript/form/email-validation.php
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const isValidEmail = emailRegex.test(email);
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
  } catch (err) {
    console.log(err);
  }
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!isValidEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6 || password === '') {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};
