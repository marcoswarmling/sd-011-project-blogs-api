const jwt = require('jsonwebtoken');
const secret = require('./helps/secretKey');

module.exports = (data) => {
  const jwtConfig = {
    expiresIn: '10m',
    algorithm: 'HS256',
  };
  console.log(data);

  const token = jwt.sign({ data }, secret, jwtConfig);

  return { token };
}; 