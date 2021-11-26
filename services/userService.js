const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const userValidation = require('../validations/userValidation');
const { status } = require('../schemas');

const JWT_CONFIG = { expiresIn: '7d', algorithm: 'HS256' };

const validadeEmailExistsError = (error) => {
  if (error.message === 'Validation error') {
    return {
        code: status.CONFLICT,
        message: 'User already registered',
    };
  }
  return error;
};

const createUser = async ({ displayName, email, password, image }) => {
  try {
    userValidation.validDisplayName(displayName);
    userValidation.validUserEmail(email); 
    userValidation.validPassword(password);

    const response = await Users.create({ displayName, email, password, image });
    const { dataValues } = response;
    delete dataValues.id;

    // const userData = {
    //   displayName: dataValues.displayName,
    //   email: dataValues.email,
    //   password: dataValues.password,
    //   image: dataValues.image,
    // };

    return jwt.sign(dataValues, process.env.JWT, JWT_CONFIG);
  } catch (e) {
    const { message, code } = validadeEmailExistsError(e);
    return { error: { message, code } };
  }
};

module.exports = {
  createUser,
};