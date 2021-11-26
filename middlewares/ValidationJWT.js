const jwt = require('jsonwebtoken');
require('dotenv/config');
const ErrorList = require('../utils/errorList');

const jwtConfig = {
  algorithm: 'HS256',
};

const createToken = (email) => {
  const token = jwt.sign({ email },
    process.env.JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) next(ErrorList.tokenNotFound.err);

  try {
    const decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedJWT;
    next();
  } catch (_err) {
    next(ErrorList.invalidToken.err);
  }
};

module.exports = {
  createToken,
  validateToken,
};
