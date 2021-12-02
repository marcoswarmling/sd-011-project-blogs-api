const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { JWT_SECRET } = process.env;

const validToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const verifyToken = jwt.verify(token, JWT_SECRET);

    req.user = verifyToken;

    return next();
  } catch (error) {
    error.statusCode = 401;

    if (token.length === 0) {
      return res.status(401).json({ message: 'Token not found' });
    }

    if (error.statusCode === 401) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
  next();
};

module.exports = { validToken };