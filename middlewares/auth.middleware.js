require('dotenv').config();
const jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next(ApiError.tokenNotFound());
    
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(ApiError.invalidToken());
      }

      const { id, displayName, email } = decoded.data;

      req.userId = id;
      req.email = email;
      req.userName = displayName;
      next();
    });
  } catch (err) {
    return next(ApiError.internalServerError());
  }
};
