require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const receivedToken = req.headers.authorization;
  if (!receivedToken) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  jwt.verify(receivedToken, process.env.JWT_SECRET, (err, _decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Expired or invalid token',
      });
    }
    next();
  });
};

module.exports = validateToken;