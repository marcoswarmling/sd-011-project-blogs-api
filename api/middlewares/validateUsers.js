const { Users } = require('../models');
const { verify } = require('../auth/jwtFunctions');

const displayNameIsValid = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const hasEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  if (
    !email
    || email === '@gmail.com' || !email.includes('@')
    || !email.includes('.com')
  ) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const hasPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const isUnicEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await Users.findOne({ where: { email } });
  if (userEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const isNotEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await Users.findOne({ where: { email } });
  if (!userEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const emailNotNull = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const passwordNotNull = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const hasToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const isTokenValid = (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
     verify(token);  
  } catch (error) {
    if (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
  next();
};

const userExists = async (req, res, next) => {
  const { id } = req.params;
  const findUser = await Users.findOne({ where: { id: Number(id) } });
  if (!findUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  next();
};

const validateUser = [
  displayNameIsValid,
  hasEmail,
  isValidEmail,
  hasPassword,
  isPasswordValid,
  isUnicEmail,
];

const loginIsValid = [
  emailNotNull,
  passwordNotNull,
  isNotEmail,
];

const validateToken = [
  hasToken,
  isTokenValid,
];

const userIsThere = [
  hasToken,
  isTokenValid,
  userExists,
];

module.exports = {
  validateUser,
  loginIsValid,
  validateToken,
  userIsThere,
};