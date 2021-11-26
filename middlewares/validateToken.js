const secret = 'seusecretdetoken';
const jwt = require('jsonwebtoken');

const isValidateToken = (req, res, next) => {
const token = req.headers.authorization;
  if (!token) {
  return res.status(401).json({ message: 'missing auth token' }); 
  }
  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' }); 
  }
};

const isValidateAuthorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token ' }); 
    }
  next();
};

module.exports = { isValidateToken, isValidateAuthorization };