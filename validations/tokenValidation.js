require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../models');

const isTokenValid = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodedToken = jwt.verify(authorization, process.env.JWT_SECRET);
    const verifyToken = await db.Users.findOne({
      where: { email: decodedToken.login.email },
    });

    if (!verifyToken) {
      return res.status(401).json({ message: 'Token not found' });
    }
    req.user = decodedToken.login;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = isTokenValid;