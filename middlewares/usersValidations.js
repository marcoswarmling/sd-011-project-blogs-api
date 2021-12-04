const { Users } = require('../models');

const validDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

const regexEmail = (email) => {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z.-]+\.[A-Z]{2,}$/igm)) return true;
  return false;
};

const validEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) return res.status(400).json({ message: '"email" is required' });

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (!regexEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) return res.status(400).json({ message: '"password" is required' });

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const validEmailExists = async (req, res, next) => {
  const { email } = req.body;

  const users = await Users.findAll();

  const emailExists = users.some((user) => user.email === email);

  if (emailExists) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = {
  validDisplayName,
  validEmail,
  validPassword,
  validEmailExists,
};
