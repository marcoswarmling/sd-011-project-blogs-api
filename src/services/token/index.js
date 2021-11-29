const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const sign = (data) => {
  const token = jwt.sign(data, secret);
  return token;
};

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = {
  sign,
  verify,
};
