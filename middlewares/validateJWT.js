const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateJWT = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ code: 'noToken', message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { email, password } = payload.data;
    req.user = { email, password };
    next();
  } catch (e) {
    return next({ code: 'jwtMalformed', message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;