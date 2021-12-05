const { Users } = require('../models');

const name = (req, res, next) => {
  const { displayName } = req.body;
  const message = '"displayName" length must be at least 8 characters long';
  if (displayName.length < 8) return res.status(400).json({ message });
  next();
};

const email = (req, res, next) => {
  const { email: vEmail } = req.body;
  const messageRequired = '"email" is required';
  if (!vEmail) return res.status(400).json({ message: messageRequired });
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const messageValid = '"email" must be a valid email';
  if (!re.test(vEmail)) return res.status(400).json({ message: messageValid });
  next();
};

const emailUnique = async (req, res, next) => {
  const { email: vEmail } = req.body;
  const users = await Users.findAll({ where: { email: vEmail } });
  // console.log('users', users);
  const message = 'User already registered';
  if (users.length > 0) return res.status(409).json({ message });
  next();
};

const password = (req, res, next) => {
  const { password: vPassword } = req.body;
  const messageRequired = '"password" is required';
  if (!vPassword) return res.status(400).json({ message: messageRequired });
  const messageValid = '"password" length must be 6 characters long';
  if (vPassword.length !== 6) return res.status(400).json({ message: messageValid });
  next();
};

module.exports = {
  name,
  email,
  emailUnique,
  password,
};