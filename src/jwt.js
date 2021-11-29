const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

exports.generateToken = ({ email }) => {
  const payload = { email };

  const OPTIONS = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, SECRET, OPTIONS);

  return token;
};