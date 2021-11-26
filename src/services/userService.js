const jwt = require('jsonwebtoken');
const { createError } = require('../middlewares/errors');
const { User } = require('../models');
const { validateUser } = require('../validations/validateUser');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const addUser = async (data) => {
  const { error: validationError } = validateUser(data);

  if (validationError) return createError('badRequest', validationError.message);

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

  return createError('conflict', 'User already registered');
};

module.exports = {
  addUser,
};
