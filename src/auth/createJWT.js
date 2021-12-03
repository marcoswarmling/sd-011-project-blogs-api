const jwt = require('jsonwebtoken');

const secret = 'secretoken';

module.exports = {
  createToken: (data) => {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
  
    return jwt.sign(data, secret, jwtConfig);
  },
};
