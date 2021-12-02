const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validateName = (req, res, next) => {
  const { displayName } = req.body;

  const message = '"displayName" length must be at least 8 characters long';

  if (displayName && displayName.length < 8) {
    return res.status(400).json({ message });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;

  const msgRequired = '"email" is required';
  const msgValidEmail = '"email" must be a valid email';
  const msgEmpty = '"email" is not allowed to be empty';

  if (email === '') {
    return res.status(400).json({ message: msgEmpty });
  }
  if (!email || email === undefined) {
    return res.status(400).json({ message: msgRequired });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: msgValidEmail });
  }
  
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const msgRequired = '"password" is required';
  const msgLength = '"password" length must be 6 characters long';
  const msgEmpty = '"password" is not allowed to be empty';

  if (password === '') {
    return res.status(400).json({ message: msgEmpty });
  }
  if (!password || password === undefined) {
    return res.status(400).json({ message: msgRequired });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: msgLength });
  }

  next();
};

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.data;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validateJWT,
};
