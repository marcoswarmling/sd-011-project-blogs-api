const { User } = require('../models');

const validEmailFormat = (email) => {
  const re = /^\w+@\w+.com(.br)?$/;
  return re.test(String(email).toLowerCase());
};

const validDisplayName = (req, res, next) => {
  try {
    const { displayName } = req.body;
    if (!displayName || displayName.length < 8) {
      return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const validPassword = (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ message: '"password" is required' });

    if (password.length !== 6) {
      return res.status(400).json({ message: '"password" length must be 6 characters long' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const validEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: '"email" is required' });

    const validationEmail = validEmailFormat(email);

    if (!validationEmail) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const validEmailExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { 
  validEmail,
  validEmailExist,
  validDisplayName,
  validPassword,
};