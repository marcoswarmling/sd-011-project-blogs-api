const jwt = require('jsonwebtoken');
const DefaultError = require('./errors/DefaultError');

const SECRET = process.env.JWT_SECRET;

exports.generateToken = (payload) => {
  const OPTIONS = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, SECRET, OPTIONS);

  return token;
};

exports.verifyToken = (token) => {
  if (!token) throw new DefaultError('Token not found', 401);

  try {
  const decode = jwt.verify(token, SECRET);
  return decode;
  } catch (_) {
    throw new DefaultError('Expired or invalid token', 401);
  }
};