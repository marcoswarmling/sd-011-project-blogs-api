const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'seusecretdetoken';

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');
  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });

    const { email } = jwt.verify(token, secret);

    const user = await User.findAll({ where: { email } });

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT; 