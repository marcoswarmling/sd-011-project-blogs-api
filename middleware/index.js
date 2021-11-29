const jwt = require('jsonwebtoken');

const secret = 'my-hardcoded-secret';

const validateNewUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long', 
    });
  }

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (typeof email === 'undefined') {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (typeof password === 'undefined') {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (email.length === 0) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (password.length === 0) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  next();
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }

  next();
};

module.exports = { 
  validateNewUser,
  validateLogin,
  validateToken,
 };
