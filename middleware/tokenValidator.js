const jwt = require('jsonwebtoken');

const secret = 'babalu';
// const idKey = 'id';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validedToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'Token not found' });
    return;
  }
  try {
    jwt.verify(token, secret, jwtConfig);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validedToken;
