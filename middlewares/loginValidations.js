const { User } = require('../models');

const findByUserEmail = async (email) => {
  const user = await User.findOne({ email });

  if (user) {
    return user.email === email;
  }

  return user;
};

const isValidLoginEmail = async (req, res, next) => {
  const { email } = req.body;
  console.log(email, 'Email do body');

  if (!email && email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }

  const user = await findByUserEmail(email);
  console.log(user, 'Estou no isValidLogin');

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

const isValidLoginPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password && password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

module.exports = {
  isValidLoginEmail,
  isValidLoginPassword,
};