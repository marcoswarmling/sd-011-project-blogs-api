const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { status, tokenMessages } = require('../Helpers/status&messages');

const JWT = 'JWT_SECRET';

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(status.unauth).json({ message: tokenMessages.notFound });

  try {
  const { email } = jwt.verify(authorization, JWT);
  
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(status.unauth).json({ message: tokenMessages.invalid });

  req.user = user;
  next();
  } catch (error) {
    res.status(status.unauth).json({ message: tokenMessages.invalid });
  }
};

module.exports = { validateToken };