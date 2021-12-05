const jwt = require('jsonwebtoken');

module.exports = (user) => {  
  const config = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };
  
  const { displayName, email, image } = user;

  return jwt.sign({ displayName, email, image }, process.env.JWT_SECRET, config);
};
