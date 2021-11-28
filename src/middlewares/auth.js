// @ts-nocheck
require('dotenv').config();
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const key = process.env.JWT_SECRET;

module.exports = rescue(async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, key);
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.data = user.dataValues;
    next();
  } catch (error) {
     return next({ code: 401, message: 'Expired or invalid token' });
  }
});
