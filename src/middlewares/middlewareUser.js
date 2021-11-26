const { Users } = require('../../models');

function validDisplayName(req, res, next) {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
}

function validEmail(req, res, next) {
  const { email } = req.body;
  const regex = /\w+@\w+.com(.br)?/;
  if (!email || email === '') {
    return res.status(400)
    .json({ message: '"email" is required' });
  }
  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
}

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  const getUser = await Users.findOne({ where: { email } });

  if (getUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = { validDisplayName, validEmail, validPassword, checkEmail };
