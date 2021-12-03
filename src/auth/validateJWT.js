const jwt = require('jsonwebtoken');
const { User } = require('../models');

const {
  tokenNotFound,
  tokenExpired,
} = require('../errorText');

const secret = 'secretoken';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  try {
    if (!token) return res.status(401).json(tokenNotFound);

    const { email } = jwt.verify(token, secret);

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json(tokenExpired);

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json(tokenExpired);
  }
};