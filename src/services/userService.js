const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const addUser = async (data) => {
  const { displayName, email, password, image } = data;

  const user = await User.findOne({ where: { email } });
  
  if (!user) {
    await User.create({ email, password, displayName, image });
    const token = jwt.sign(
      { email, displayName, image }, 
      process.env.JWT_SECRET,
      jwtConfig,
    );
  
    return token;
  }

  return null;
};

module.exports = {
  addUser,
};
