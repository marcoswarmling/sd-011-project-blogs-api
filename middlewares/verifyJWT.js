const jwt = require('jsonwebtoken');

const secret = 'secret';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = decoded.data;
  return next();
};

module.exports = {
  validateJWT,
};