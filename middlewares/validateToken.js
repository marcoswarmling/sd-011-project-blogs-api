const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const tokenError = new Error('tokenMalformed');
const tokenNotFoundError = new Error('tokenNotFound');

function validateToken(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw tokenNotFoundError;
  try {
    const data = jwt.verify(authorization, secret);
    req.jwtData = data;

    next();
  } catch (e) {
    throw tokenError;
  }
}

module.exports = validateToken;