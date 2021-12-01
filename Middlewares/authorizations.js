const jwt = require('jsonwebtoken');
const { status, tokenMessages } = require('../Helpers/status&messages');

const JWT = 'JWT_SECRET';

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(status.unauth).json({ message: tokenMessages.notFound });

  try {
  jwt.verify(authorization, JWT);

  next();
  } catch (error) {
    res.status(status.unauth).json({ message: tokenMessages.invalid });
  }
};

module.exports = { validateToken };