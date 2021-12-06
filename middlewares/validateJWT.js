const Jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const { JWT_SECRET } = process.env;

const validateUserWithToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { user: { email } } = Jwt.verify(token, JWT_SECRET);
    const userFind = await User.findOne({ where: { email } });

    if (!userFind.dataValues) {
      return res
        .status(404)
        .json({ message: 'Not found user.' });
    }
    req.user = userFind.dataValues;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateUserWithToken,
};
