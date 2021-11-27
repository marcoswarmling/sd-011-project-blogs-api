// @ts-nocheck
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authKey = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'missing auth token' });
    const decoded = jwt.verify(token, authKey);
    const user = await User.findByEmail(decoded.email);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.data = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
