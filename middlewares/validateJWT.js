const jwt = require('jsonwebtoken');
require('dotenv').config();
const { getUserByName } = require('../services/getUserByName');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await getUserByName(decoded.data.displayName);

    if (user) {
      return next();
    }

    return res.status(401).json({ message: 'User not found' });
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};
