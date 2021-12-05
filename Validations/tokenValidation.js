require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../models');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const tokenDecoded = jwt.verify(token, secret);
      const tokenExists = await db.Users.findOne({
      where: { email: tokenDecoded.login.email },
    });
    if (!tokenExists) {
      return res.status(401).json({ message: 'Token not found' });
    }

    req.user = tokenDecoded.login;     
    return next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;