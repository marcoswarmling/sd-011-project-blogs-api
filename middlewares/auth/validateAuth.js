require('dotenv').config();
const jwt = require('jsonwebtoken');

const passwordJWT = process.env.JWT_SECRET;

const userAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const payload = jwt.verify(token, passwordJWT);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = {
  userAuth,
};