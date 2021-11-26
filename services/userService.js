const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const userValidation = require('../validations/userValidation');

const JWT_CONFIG = { expiresIn: '7d', algorithm: 'HS256' };

const createUser = async ({ displayName, email, password, image }) => {
  try {
    userValidation.validDisplayName(displayName);
    userValidation.validUserEmail(email); 
    userValidation.validPassword(password);

    const response = await Users.create({ displayName, email, password, image });
    const { dataValues } = response;

    const userData = {
      displayName: dataValues.displayName,
      email: dataValues.email,
      password: dataValues.password,
      image: dataValues.image,
    };
    return jwt.sign(userData, process.env.JWT, JWT_CONFIG);
  } catch (e) {
    const conditionalErrorMessage = e
      .message === 'Validation error' ? 'User already registered' : e.message;
    return { error: { message: conditionalErrorMessage, code: e.code || 409 } };
  }
};

module.exports = {
  createUser,
};