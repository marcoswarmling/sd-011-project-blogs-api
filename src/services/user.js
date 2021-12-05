const AppError = require('../errorHandler/AppError');
const httpCodes = require('../constants/httpCodes.json');
const { User } = require('../models');
const ajv = require('../schemas/validation');

exports.createUserSvc = async (user) => {
  const validate = ajv.getSchema('users');
  const isValid = validate(user);
  if (isValid) return User.create({ ...user });
  throw new AppError(httpCodes.HTTP_BAD_REQUEST, validate.errors[0].message);
};

exports.getAllUsers = async () => User.findAll();

exports.getByUserId = async (id) => User.findByPk(id);
