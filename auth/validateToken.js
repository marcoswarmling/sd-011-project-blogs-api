const JWT = require('jsonwebtoken');

const USER_SECRET = 'secretLoginSecret';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    JWT.verify(token, USER_SECRET);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};