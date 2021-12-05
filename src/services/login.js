const jwt = require('jsonwebtoken');
const AppError = require('../errorHandler/AppError');
const { User } = require('../models');
const httpCodes = require('../constants/httpCodes.json');
const ajv = require('../schemas/validation');
const errorMessages = require('../constants/errorMessages.json');

const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const loginUserSvc = async (user) => {
  const validate = ajv.getSchema('login');
  const isValid = validate(user);
  if (isValid) {
    const userLogged = await User.findOne({ where: { email: user.email } });
    if (userLogged && userLogged.password === user.password) {
      const { password: _, ...userWithOutPassword } = userLogged;
      const token = jwt.sign({ data: userWithOutPassword }, process.env.JWT_SECRET, jwtConfig);
      return token;
    }
    throw new AppError(
      httpCodes.HTTP_BAD_REQUEST,
      errorMessages.INCORRECT_AUTH,
    );
  }
  throw new AppError(httpCodes.HTTP_BAD_REQUEST, validate.errors[0].message);
};

module.exports = {
  loginUserSvc,
};
