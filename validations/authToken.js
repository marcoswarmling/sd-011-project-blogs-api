const jwt = require('jsonwebtoken');
const err = require('../helpers/errors');

require('dotenv').config();

const PRIVATE_KEY = process.env.JWT_SECRET || '27mr';

const validToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json(err.tokenNotFound);

  jwt.verify(token, PRIVATE_KEY, (error, decoded) => {
    if (error) return res.status(401).json(err.invalidToken);

    req.userId = decoded.id;
    next();
  });
};

module.exports = validToken;