const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const { error, userId } = jwt.verify(authorization, process.env.JWT_SECRET);
    if (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.userId = userId;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};