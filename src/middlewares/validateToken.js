require('dotenv').config();
const { verify } = require('jsonwebtoken');
const { tokenNotFound, tokenExpiredOrInvalid } = require('../errors');

module.exports = async (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;
  
    if (!token) return next(tokenNotFound);
  
    verify(token, process.env.JWT_SECRET);
  
    return next();
  } catch (error) {
    next(tokenExpiredOrInvalid);
  }
};
