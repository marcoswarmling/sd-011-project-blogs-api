const jwt = require('jsonwebtoken');
require('dotenv').config();
// const userModel = require('../../models/userModel');

const STATUS_UNAUTHORIZED = 401;

const MSG_MISSING_TOKEN = 'Token not found';

const MSG_INVALID_TOKEN = 'Expired or invalid token';

const segredo = process.env.JWT_SECRET; // << Chave "secreta"

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_MISSING_TOKEN });
  
  try {
    const { data } = jwt.verify(token, segredo);
    req.user = data;

    next();
  } catch (err) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_INVALID_TOKEN });
  }
};