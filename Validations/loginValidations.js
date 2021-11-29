const db = require('../models');

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  const loginUser = await db.Users.findOne({ where: { email, password } });

    // if (!loginUser || email !== loginUser.email || password !== loginUser.password) 
    if (!loginUser || loginUser === null) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = {
  emailValidation,
  passwordValidation,
  loginValidation,
};