const { Users } = require('../models');

const email = (req, res, next) => {
  const user = req.body;
  const messageEmpty = '"email" is not allowed to be empty';
  if (user.email === '') return res.status(400).json({ message: messageEmpty });
  const messageRequired = '"email" is required';
  if (!user.email) return res.status(400).json({ message: messageRequired });
  next();
};

const password = (req, res, next) => {
  const user = req.body;
  const messageEmpty = '"password" is not allowed to be empty';
  if (user.password === '') return res.status(400).json({ message: messageEmpty });
  const messageRequired = '"password" is required';
  if (!user.password) return res.status(400).json({ message: messageRequired });
  next();
};

const login = async (req, res, next) => {
  const user = req.body;
  const response = await Users.findOne({ where: { email: user.email, password: user.password } });
  // está retornando sempre vazio
  // console.log('findUser', response);
  if (!response) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = {
  email,
  password,
  login,
};