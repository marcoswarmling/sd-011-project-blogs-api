require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../models');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const getToken = jwt.verify(token, process.env.secret);

    const existToken = await db.Users.findOne({
      where: { email: getToken.login.email },
    });

    if (!existToken) {
      return res.status(401).json({ message: 'Token not found' });
    }
   next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;