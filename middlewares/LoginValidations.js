const { User } = require('../models');

const validateFields = async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ where: { email } });

  if (!findUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
 
  if (password !== findUser.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const emailNotEmpty = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  next();
};

const passwordNotEmpty = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

module.exports = {
  validateFields,
  emailNotEmpty,
  passwordNotEmpty,
};
