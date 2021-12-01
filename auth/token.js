const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const newToken = (signing) => jwt.sign(signing, JWT_SECRET);

module.exports = {
  newToken,
};
