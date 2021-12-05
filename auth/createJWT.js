const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createJWT = (data) => {
  const jtwConfig = {
    expiresIn: '15M',
    algorithm: 'HS256', 
  };

  const token = jwt.sign({ data }, secret, jtwConfig);

  return { token };
};

module.exports = {
  createJWT,
};